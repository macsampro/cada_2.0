import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesController } from './species.controller';
import { Species } from './entities/species.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Species]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [SpeciesController],
  providers: [SpeciesService],
})
export class SpeciesModule {}
