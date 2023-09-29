import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Species')
@Controller('species')
//protection de la root
// @UseGuards(AuthGuard())
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.speciesService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.speciesService.findOne(+id);
  }
}
