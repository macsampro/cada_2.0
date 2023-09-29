import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message, User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
