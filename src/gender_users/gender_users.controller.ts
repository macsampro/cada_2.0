import { Controller, Get, Param } from '@nestjs/common';
import { GenderUsersService } from './gender_users.service';

@Controller('gender-users')
export class GenderUsersController {
  constructor(private readonly genderUsersService: GenderUsersService) {}

  @Get()
  findAll() {
    return this.genderUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genderUsersService.findOne(+id);
  }
}
