import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message';
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

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
