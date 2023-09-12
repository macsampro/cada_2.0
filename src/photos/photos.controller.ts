import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('photos')
@ApiTags('Photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  create(@Body() createPhotoDto: CreatePhotoDto) {
    return this.photosService.create(createPhotoDto);
  }

  @Get()
  //protection de la root
  // @UseGuards(AuthGuard())
  findAll() {
    return this.photosService.findAll();
  }

  @Get(':id')
  //protection de la root
  // @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(+id);
  }

  @Patch(':id')
  //protection de la root
  // @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photosService.update(+id, updatePhotoDto);
  }

  @Delete(':id')
  //protection de la root
  // @UseGuards(AuthGuard())
  remove(@Param('id') id: string) {
    return this.photosService.remove(+id);
  }
}
