import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GenderUsersModule } from './gender_users/gender_users.module';
import { GenderUser } from './gender_users/entities/gender_user.entity';
import { MessagesModule } from './messages/messages.module';
import { Message } from './messages/entities/message.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [GenderUser, Message],
      synchronize: false,
      logging: true,
    }),
    GenderUsersModule,
    MessagesModule,
  ],
 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
