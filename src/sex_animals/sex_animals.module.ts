import { Module } from '@nestjs/common';
import { SexAnimalsService } from './sex_animals.service';
import { SexAnimalsController } from './sex_animals.controller';

@Module({
  controllers: [SexAnimalsController],
  providers: [SexAnimalsService],
})
export class SexAnimalsModule {}
