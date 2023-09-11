import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepository.create(createMessageDto);
    const result = await this.messageRepository.save(message);
    return result;
  }

  async findAll() {
    return await this.messageRepository.find();
  }

  async findOne(id: number) {
    const messagechoosen = await this.messageRepository.findOneBy({
      id_message: id,
    });
    if (!messagechoosen) {
      throw new NotFoundException(`Message with id: ${id} not found`);
    }
    return messagechoosen;
  }

  async remove(id: number) {
    const messageToDelete = await this.findOne(id);
    if (!messageToDelete) {
      throw new NotFoundException(`Message with id : ${id} not found`);
    }
    await this.messageRepository.remove(messageToDelete);
    return `Message with id : ${id} has been deleted`;
  }
}
