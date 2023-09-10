import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenderUser } from './entities/gender_user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenderUsersService {
  constructor(
    @InjectRepository(GenderUser)
    private genderRepository: Repository<GenderUser>,
  ) {}
  async findAll() {
    return await this.genderRepository.find();
  }

  async findOne(id: number) {
    const genderFound = await this.genderRepository.findOneBy({
      id_gender_user: id,
    });
    if (!genderFound) {
      throw new NotFoundException(`L'id numéro ${id} n'existe pas`);
    }
    return genderFound;
  }
}
