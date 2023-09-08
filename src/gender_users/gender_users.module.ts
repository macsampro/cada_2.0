import { Module } from '@nestjs/common';
import { GenderUsersService } from './gender_users.service';
import { GenderUsersController } from './gender_users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderUser } from './entities/gender_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenderUser])],
  controllers: [GenderUsersController],
  providers: [GenderUsersService],
})
export class GenderUsersModule {}
