import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SpeciesModule } from './species/species.module';
import { Species } from './species/entities/species.entity';
import { AnimalsModule } from './animals/animals.module';
import { Animal } from './animals/entities/animal.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }) ,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [Species, Animal],
    synchronize: false,
    logging: true,
  }),
    SpeciesModule,
    AnimalsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
