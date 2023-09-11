import {
  Controller,
  Get,
  Param,  
} from '@nestjs/common';
import { SpeciesService } from './species.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Species')
@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}  

  @Get()
  findAll() {
    return this.speciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speciesService.findOne(+id);
  }
}
