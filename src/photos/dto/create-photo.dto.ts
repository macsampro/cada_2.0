import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  path: string;
}
