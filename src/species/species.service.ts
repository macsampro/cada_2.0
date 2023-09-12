import { Injectable, NotFoundException } from '@nestjs/common';
import { Species } from './entities/species.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species) private speciesRepository: Repository<Species>,
  ) {}

  async findAll() {
    return await this.speciesRepository.find();
  }

  async findOne(id_species: number) {
    const found = await this.speciesRepository.findOneBy({ id_species });
    if (!found) {
      throw new NotFoundException(
        `The species id number ${id_species} is not found !`,
      );
    }
    return found;
  } 
}
