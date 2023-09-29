import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('messages')
@ApiTags('Messages')
//protection de la root
// @UseGuards(AuthGuard())
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    const newMessage = this.messagesService.create(createMessageDto);
    console.log('Evenement post message');
    return newMessage;
  }

  @Get('conversation/:user1Id/:user2Id')
  @UseGuards(AuthGuard('jwt'))
  async findConversation(
    @Param('user1Id') user1Id: number,
    @Param('user2Id') user2Id: number,
  ) {
    return this.messagesService.findConversation(user1Id, user2Id);
  }

  @Get('list/:userId')
  @UseGuards(AuthGuard('jwt'))
  getUserConversations(@Param('userId') userId: number) {
    return this.messagesService.getUserConversations(userId);
  }

  @Get('new/:afterId')
  @UseGuards(AuthGuard('jwt'))
  getNewMessage(@Param('afterId') afterId: number) {
    return this.messagesService.getMessagesAfterId(afterId);
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
