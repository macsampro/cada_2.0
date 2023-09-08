import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SexAnimalsService } from './sex_animals.service';
import { CreateSexAnimalDto } from './dto/create-sex_animal.dto';
import { UpdateSexAnimalDto } from './dto/update-sex_animal.dto';

@Controller('sex-animals')
export class SexAnimalsController {
  constructor(private readonly sexAnimalsService: SexAnimalsService) {}

  @Post()
  create(@Body() createSexAnimalDto: CreateSexAnimalDto) {
    return this.sexAnimalsService.create(createSexAnimalDto);
  }

  @Get()
  findAll() {
    return this.sexAnimalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sexAnimalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSexAnimalDto: UpdateSexAnimalDto) {
    return this.sexAnimalsService.update(+id, updateSexAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sexAnimalsService.remove(+id);
  }
}
