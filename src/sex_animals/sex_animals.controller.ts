import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SexAnimalsService } from './sex_animals.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('sex-animals')
@ApiTags('sex_animals')
//protection de la root
// @UseGuards(AuthGuard())
export class SexAnimalsController {
  constructor(private readonly sexAnimalsService: SexAnimalsService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.sexAnimalsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.sexAnimalsService.findOne(+id);
  }
}
