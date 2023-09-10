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
      entities: [Animal, Breed, GenderUser, SexAnimal, Species],
      synchronize: false,
      logging: true,
    }),
    AnimalsModule,
    BreedModule,
    GenderUsersModule,
    SexAnimalsModule,
    SpeciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
