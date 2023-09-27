import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  minetype: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  size: number;
}
