import {
  Controller,
  Get,
  Param,
  Res,
  StreamableFile,
  UploadedFile,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('photos')
@ApiTags('Photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  // @Post()
  // create(@Body() createPhotoDto: CreatePhotoDto) {
  //   return this.photosService.create(createPhotoDto);
  // }

  @Post()
  @UseInterceptors(FileInterceptor('monFichier'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.photosService.create(file);
  }
  // @Get()
  // //protection de la root
  // // @UseGuards(AuthGuard())
  // findAll() {
  //   return this.photosService.findAll();
  // }

  @Get()
  async getPhotos(@Res({ passthrough: true }) res): Promise<StreamableFile> {
    return this.photosService.getImage(res);
  }

  @Get(':id')
  getImageById(
    @Param('id') id: string,
    @Res({ passthrough: true }) res,
  ): Promise<StreamableFile> {
    return this.photosService.getImageById(+id, res);
  }

  // @Get(':id')
  // //protection de la root
  // // @UseGuards(AuthGuard())
  // findOne(@Param('id') id: string) {
  //   return this.photosService.findOne(+id);
  // }

  // @Patch(':id')
  // //protection de la root
  // // @UseGuards(AuthGuard())
  // update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
  //   return this.photosService.update(+id, updatePhotoDto);
  // }

  // @Delete(':id')
  // //protection de la root
  // // @UseGuards(AuthGuard())
  // remove(@Param('id') id: string) {
  //   return this.photosService.remove(+id);
  // }
}
