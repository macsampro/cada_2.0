import { Injectable, NotFoundException } from '@nestjs/common';
import { GenderUser } from './entities/gender_user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GenderUsersService {
  
  

  constructor( @InjectRepository(GenderUser) private genderUsersRepository: Repository<GenderUser>,){}

  async findAll() {    
    return await this.genderUsersRepository.find();
  }

  async findOne(id: number) {
    const genderChosen = await this.genderUsersRepository.findOneBy({ id_gender_user : id })
    if (!genderChosen) {
      throw new NotFoundException(`Gender with the id ${id} not found`);
    }
    return genderChosen;
  } 
}
