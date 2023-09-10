import { Module } from '@nestjs/common';
import { GenderUsersService } from './gender_users.service';
import { GenderUsersController } from './gender_users.controller';
import { GenderUser } from './entities/gender_user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GenderUser])],
  controllers: [GenderUsersController],
  providers: [GenderUsersService],

})
export class GenderUsersModule {}
