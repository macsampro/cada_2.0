import { PartialType } from '@nestjs/swagger';
import { CreateGenderUserDto } from './create-gender_user.dto';

export class UpdateGenderUserDto extends PartialType(CreateGenderUserDto) {}
