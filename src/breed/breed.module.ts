import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Breed]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [BreedController],
  providers: [BreedService],
})
export class BreedModule {}
