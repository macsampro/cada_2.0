import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
  ) {}
  async create(createPhotoDto: CreatePhotoDto) {
    const newphoto = this.photoRepository.create(createPhotoDto);
    const result = await this.photoRepository.save(newphoto);
    return result;
  }

  async findAll() {
    return await this.photoRepository.find();
  }

  async findOne(id_photo: number) {
    const found = await this.photoRepository.findOneBy({ id_photo });
    if (!found) {
      throw new NotFoundException(`The photo ${id_photo} is not found !`);
    }
    return found;
  }

  async update(id_photo: number, updatePhotoDto: UpdatePhotoDto) {
    await this.photoRepository.update(id_photo, updatePhotoDto);
    return this.findOne(id_photo);
  }

  async remove(id_photo: number) {
    const photoToRemove = await this.findOne(id_photo);

    if (!photoToRemove) {
      throw new Error(`The photo ${id_photo} is not found !`);
    }

    await this.photoRepository.remove(photoToRemove);
    return { message: `The photo ${photoToRemove.name} is delelete ! ` };
  }
}
