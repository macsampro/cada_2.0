import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, MoreThan, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MessagesService {

  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>, @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const sender = await this.userRepository.findOne({ where: { id_user: createMessageDto.senderId } });
    const receiver = await this.userRepository.findOne({ where: { id_user: createMessageDto.receiverId } });

    if (!sender || !receiver) {
      throw new NotFoundException('Expéditeur ou destinataire non trouver !');
    }

    const message = new Message();
    message.message = createMessageDto.message;
    message.sender = sender;
    message.receiver = receiver;

    return await this.messageRepository.save(message);
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find({ relations: ['id_user_send', 'id_user_received'] });
  }

  async findConversation(user1Id: number, user2Id: number): Promise<Message[]> {
    return this.messageRepository
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.sender', 'sender')
      .leftJoinAndSelect('message.receiver', 'receiver')
      .where("(message.sender = :user1Id AND message.receiver = :user2Id) OR (message.sender = :user2Id AND message.receiver = :user1Id)", { user1Id, user2Id })
      .orderBy('message.date', 'ASC')
      .getMany();
  }

  getMessagesAfterId(afterId: number): Promise<Message> {
    return this.messageRepository.findOne({
      where: { id_message: MoreThan(afterId) },
      order: { date: 'ASC' },
    });
  }

  async getUserConversations(userId: number): Promise<User[]> {
    // Query pour récupérer les utilisateurs à qui l'utilisateur a envoyé des messages
    const sendersQuery = this.messageRepository
      .createQueryBuilder("message")
      .select("message.id_user_send", "id_user_send")
      .where("message.id_user_received = :userId", { userId })
      .groupBy("message.id_user_send");

    // Query pour récupérer les utilisateurs de qui l'utilisateur a reçu des messages
    const receiversQuery = this.messageRepository
      .createQueryBuilder("message")
      .select("message.id_user_received", "id_user_received")
      .where("message.id_user_send = :userId", { userId })
      .groupBy("message.id_user_received");

      //GetRawMany: c'est un truc une méthode du query builder de Typeorm,
      // il renvoie le résultat sous forme d'un tableau sans transformation à la table 
    const senders = await sendersQuery.getRawMany();
    const receivers = await receiversQuery.getRawMany();

    // Fusionner les deux listes et retirer les doublons
    const allUserIds = [...senders.map(s => s.id_user_send), ...receivers.map(r => r.id_user_received)];
    const uniqueUserIds = Array.from(new Set(allUserIds));

    // Recup des utilisateurs
    const users = await this.userRepository.findBy({id_user: In(uniqueUserIds)});
    return users;
  }



  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
