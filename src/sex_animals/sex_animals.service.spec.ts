import { Test, TestingModule } from '@nestjs/testing';
import { SexAnimalsService } from './sex_animals.service';

describe('SexAnimalsService', () => {
  let service: SexAnimalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SexAnimalsService],
    }).compile();

    service = module.get<SexAnimalsService>(SexAnimalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
