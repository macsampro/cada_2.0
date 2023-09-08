import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';
import { Species } from './entities/species.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SpeciesService {

  constructor(@InjectRepository(Species) private speciesRepository: Repository<Species>){}

  async create(createSpeciesDto: CreateSpeciesDto) {
    const species = this.speciesRepository.create(createSpeciesDto);
    const result = await this.speciesRepository.save(species);
    return result;
  }

  async findAll() {
    return await this.speciesRepository.find();
  }

  async findOne(id_species: number) {

    const found = await this.speciesRepository.findOneBy({ id_species })
    if(!found){
      throw new NotFoundException(`The species id number ${id_species} is not found !`)
    }
    return found;
  }

  async update(id_species: number, updateSpeciesDto: UpdateSpeciesDto) {
    await this.speciesRepository.update(id_species, updateSpeciesDto); 
    return this.findOne(id_species);
  }

  async remove(id_species: number) {

    const specieToRemove = await this.findOne(id_species);
    if(!specieToRemove){
      throw new Error(`The specie with id number: ${id_species} is not found !`)
    }
    await this.speciesRepository.remove(specieToRemove);
    return {message : `The specie ${specieToRemove.species} is deleted !`};
  }
}
