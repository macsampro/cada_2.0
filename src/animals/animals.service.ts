import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Animal } from './entities/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { GetUser } from 'src/auth/get-user.decorators';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal) private animalRepository: Repository<Animal>,
  ) {}

  async create(createSpeciesDto: CreateAnimalDto, user: User) {
    const species = this.animalRepository.create(createSpeciesDto);
    const result = await this.animalRepository.save(species);
    return result;
  }

  async findAll() {
    return await this.animalRepository.find();
  }

  async findOne(id_animals: number) {
    const found = await this.animalRepository.findOneBy({ id_animals });
    if (!found) {
      throw new NotFoundException(
        `The species id number ${id_animals} is not found !`,
      );
    }
    return found;
  }

  async update(id_animals: number, updateSpeciesDto: UpdateAnimalDto) {
    await this.animalRepository.update(id_animals, updateSpeciesDto);
    return this.findOne(id_animals);
  }

  async remove(id_animals: number) {
    const animalToRemove = await this.findOne(id_animals);
    if (!animalToRemove) {
      throw new Error(
        `The animal with id number: ${id_animals} is not found !`,
      );
    }
    await this.animalRepository.remove(animalToRemove);
    return { message: `The animal ${animalToRemove.name} is deleted !` };
  }
}
