import { Module } from '@nestjs/common';
import { SexAnimalsService } from './sex_animals.service';
import { SexAnimalsController } from './sex_animals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SexAnimal } from './entities/sex_animal.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([SexAnimal]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [SexAnimalsController],
  providers: [SexAnimalsService],
})
export class SexAnimalsModule {}
