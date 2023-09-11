import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BreedService {
  constructor(
    @InjectRepository(Breed) private breedRepository: Repository<Breed>,
  ) {}

  async create(createBreedDto: CreateBreedDto) {
    const breed = this.breedRepository.create(createBreedDto);
    const result = await this.breedRepository.save(breed);

    return result;
  }

  async findAll() {
    return await this.breedRepository.find();
  }

  async findOne(id: number) {
    const found = await this.breedRepository.findOneBy({ id_breed: id });
    if (!found) {
      throw new NotFoundException(`Breed with the id ${id} not found`);
    }
    return found;
  }

  async update(id: number, UpdateBreedDto: UpdateBreedDto) {
    const breed = await this.findOne(id);
    const newBreed = this.breedRepository.merge(breed, UpdateBreedDto);
    const result = await this.breedRepository.save(newBreed);
    return result;
  }

  async remove(id_breed: number) {
    const breedToRemove = await this.findOne(id_breed);
    if (!breedToRemove) {
      throw new Error(`The breed with id number: ${id_breed} is not found !`);
    }
    await this.breedRepository.remove(breedToRemove);
    return { message: `The breed${breedToRemove} is deleted !` };
  }
}
