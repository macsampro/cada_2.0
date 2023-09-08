import { Module } from '@nestjs/common';
import { SexAnimalsService } from './sex_animals.service';
import { SexAnimalsController } from './sex_animals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SexAnimal } from './entities/sex_animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SexAnimal])],
  controllers: [SexAnimalsController],
  providers: [SexAnimalsService],
})
export class SexAnimalsModule {}
