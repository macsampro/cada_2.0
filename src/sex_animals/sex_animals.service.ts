import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SexAnimal } from './entities/sex_animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SexAnimalsService {
  constructor(
    @InjectRepository(SexAnimal)
    private sexAnimalRepository: Repository<SexAnimal>,
  ) {}

  async findAll() {
    // console.log('le console loe que je veut ' + JSON.stringify(this.sexAnimalRepository.find()))
    return await this.sexAnimalRepository.find();
  }

  async findOne(id_sex_animal: number) {
    const found = await this.sexAnimalRepository.findOneBy({ id_sex_animal });
    if (!found) {
      throw new NotFoundException(
        ` Sex with the id number ${id_sex_animal} not found`,
      );
    }
    return found;
  }
}
