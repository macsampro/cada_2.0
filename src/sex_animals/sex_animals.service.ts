import { Injectable } from '@nestjs/common';
import { CreateSexAnimalDto } from './dto/create-sex_animal.dto';
import { UpdateSexAnimalDto } from './dto/update-sex_animal.dto';

@Injectable()
export class SexAnimalsService {
  create(createSexAnimalDto: CreateSexAnimalDto) {
    return 'This action adds a new sexAnimal';
  }

  findAll() {
    return `This action returns all sexAnimals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sexAnimal`;
  }

  update(id: number, updateSexAnimalDto: UpdateSexAnimalDto) {
    return `This action updates a #${id} sexAnimal`;
  }

  remove(id: number) {
    return `This action removes a #${id} sexAnimal`;
  }
}
