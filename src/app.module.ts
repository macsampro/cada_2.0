import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GenderUsersModule } from './gender_users/gender_users.module';
import { GenderUser } from './gender_users/entities/gender_user.entity';
import { SpeciesModule } from './species/species.module';
import { Species } from './species/entities/species.entity';
import { AnimalsModule } from './animals/animals.module';
import { Animal } from './animals/entities/animal.entity';
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
      entities: [GenderUser, Animal, Species],
      synchronize: false,
      logging: true,
    }),
    GenderUsersModule,
    AnimalsModule,
    SpeciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
