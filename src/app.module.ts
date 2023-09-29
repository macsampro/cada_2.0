import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SexAnimalsModule } from './sex_animals/sex_animals.module';
import { SexAnimal } from './sex_animals/entities/sex_animal.entity';
import { BreedModule } from './breed/breed.module';
import { GenderUsersModule } from './gender_users/gender_users.module';
import { GenderUser } from './gender_users/entities/gender_user.entity';
import { SpeciesModule } from './species/species.module';
import { Species } from './species/entities/species.entity';
import { AnimalsModule } from './animals/animals.module';
import { Animal } from './animals/entities/animal.entity';
import { Breed } from './breed/entities/breed.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Photo } from './photos/entities/photo.entity';
import { Message } from './messages/entities/message.entity';
import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { ChatGateway } from './chat.gateway';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [
        Animal,
        Breed,
        GenderUser,
        SexAnimal,
        Species,
        User,
        Photo,
        Message,
      ],
      synchronize: false,
      logging: false,
    }),
    AnimalsModule,
    BreedModule,
    GenderUsersModule,
    SexAnimalsModule,
    SpeciesModule,
    UsersModule,
    MessagesModule,
    PhotosModule,
    AuthModule,
    ChatGateway
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
