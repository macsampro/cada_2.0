import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decoration';
import { User } from 'src/users/entities/user.entity';
import { Animal } from './entities/animal.entity';
import { PassportModule } from '@nestjs/passport';

@ApiTags('Animals')
@Controller('animals')
//protection de la root
// @UseGuards(AuthGuard())
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createAnimalDto: CreateAnimalDto, @GetUser() user: User): Promise<Animal> {
     console.log(user);
    return this.animalsService.create(createAnimalDto, user);
  }

  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.animalsService.findOne(+id);
  // }

  // @Get('user/:id')
  // findAnimalByUser(@Param('user/:id') id: string) {
  //   // id = this.animalsService.findOne(+id);
  //   console.log(id);
  //   return this.animalsService.animalByUserId(+id);
  // }

  @Get('animal')
  @UseGuards(AuthGuard('jwt'))
  find(@Request() req) {
    const userId = req.user.id_user;
    // console.log('cote controlleur ' + userId);
    return this.animalsService.animalByUserId(+userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalsService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalsService.remove(+id);
  }
}
