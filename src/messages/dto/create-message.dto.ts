import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  senderId: number;

  @ApiProperty()
  receiverId: number;

  @ApiProperty()
  message: string;
}
