import { PartialType } from '@nestjs/swagger';
import { CreateSexAnimalDto } from './create-sex_animal.dto';

export class UpdateSexAnimalDto extends PartialType(CreateSexAnimalDto) {}
