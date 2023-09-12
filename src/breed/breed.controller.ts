import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('breed')
@ApiTags('Breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Post()
  create(@Body() createBreedDto: CreateBreedDto) {
    return this.breedService.create(createBreedDto);
  }

  @Get()
  findAll() {
    return this.breedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breedService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breedService.remove(+id);
  }
}
