import { Module } from '@nestjs/common';
import { GenderUsersService } from './gender_users.service';
import { GenderUsersController } from './gender_users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderUser } from './entities/gender_user.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([GenderUser]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [GenderUsersController],
  providers: [GenderUsersService],
})
export class GenderUsersModule {}
