import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SexAnimalsModule } from './sex_animals/sex_animals.module';
import { SexAnimal } from './sex_animals/entities/sex_animal.entity';
import { BreedModule } from './breed/breed.module';

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
      entities: [SexAnimal],
      synchronize: false,
      logging: true,
    }),
    SexAnimalsModule,
    BreedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
