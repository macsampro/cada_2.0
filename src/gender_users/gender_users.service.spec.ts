import { Test, TestingModule } from '@nestjs/testing';
import { GenderUsersService } from './gender_users.service';

describe('GenderUsersService', () => {
  let service: GenderUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenderUsersService],
    }).compile();

    service = module.get<GenderUsersService>(GenderUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
