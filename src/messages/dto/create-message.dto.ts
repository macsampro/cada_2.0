import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @ApiProperty()
  date: Date;

  @IsNotEmpty()
  @ApiProperty()
  message: string;

  @IsNotEmpty()
  @ApiProperty()
  id_user_send: number;

  @IsNotEmpty()
  @ApiProperty()
  id_user_received: number;
}
