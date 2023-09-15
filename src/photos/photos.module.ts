import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
