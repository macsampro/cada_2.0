import { Controller, Get, Param } from '@nestjs/common';
import { SexAnimalsService } from './sex_animals.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('sex-animals')
@ApiTags('sex_animals')
//protection de la root
// @UseGuards(AuthGuard())
export class SexAnimalsController {
  constructor(private readonly sexAnimalsService: SexAnimalsService) {}

  @Get()
  findAll() {
    return this.sexAnimalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sexAnimalsService.findOne(+id);
  }
}
