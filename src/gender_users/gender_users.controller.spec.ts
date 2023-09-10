import { Test, TestingModule } from '@nestjs/testing';
import { GenderUsersController } from './gender_users.controller';
import { GenderUsersService } from './gender_users.service';

describe('GenderUsersController', () => {
  let controller: GenderUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenderUsersController],
      providers: [GenderUsersService],
    }).compile();

    controller = module.get<GenderUsersController>(GenderUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
