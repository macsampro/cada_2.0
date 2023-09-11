import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSexAnimalDto } from './dto/create-sex_animal.dto';
import { UpdateSexAnimalDto } from './dto/update-sex_animal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SexAnimal } from './entities/sex_animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SexAnimalsService {
  constructor(
    @InjectRepository(SexAnimal)
    private sexAnimalRepository: Repository<SexAnimal>,
  ) {}
  async create(createSexAnimalDto: CreateSexAnimalDto) {
    const sex_animal = this.sexAnimalRepository.create(createSexAnimalDto);
    const result = await this.sexAnimalRepository.save(sex_animal);
    return result;
  }

  async findAll() {
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

  async update(id_sex_animal: number, updateSexAnimalDto: UpdateSexAnimalDto) {
    const sex_animals = await this.findOne(id_sex_animal);
    const newSex = this.sexAnimalRepository.merge(
      sex_animals,
      updateSexAnimalDto,
    );
    const result = await this.sexAnimalRepository.save(newSex);

    return result;
  }
  // async update(id: number, updateSexAnimaltDto: UpdateSexAnimalDto) {
  //   await this.sexAnimalRepository.update(id, updateSexAniumalDto);
  //    return this.findOne(id);   }

  async remove(id_sex_animal: number) {
    const sex_animalToRemove = await this.findOne(id_sex_animal);
    if (!sex_animalToRemove) {
      throw new Error(
        ` The sex_animal with id number : ${id_sex_animal} is not found !`,
      );
    }
    await this.sexAnimalRepository.remove(sex_animalToRemove);
    return {
      message: `Sex animal ${sex_animalToRemove.sex} is deleted !`,
    };
  }
}
