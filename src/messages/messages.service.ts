import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
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
    return await this.messageRepository.find({ relations: ['sender_id', 'receiver_id'] });
  }

  async findConversation(user1Id: number, user2Id: number): Promise<Message[]> {
    return this.messageRepository
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.sender_id', 'sender')
      .leftJoinAndSelect('message.receiver_id', 'receiver')
      .where("(message.sender_id = :user1Id AND message.receiver_id = :user2Id) OR (message.sender_id = :user2Id AND message.receiver_id = :user1Id)", { user1Id, user2Id })
      .orderBy('message.timestamp', 'ASC')
      .getMany();
  }

  getMessagesAfterId(afterId: number): Promise<Message> {
    return this.messageRepository.findOne({
      where: { id_message: MoreThan(afterId) },
      order: { date: 'ASC' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
