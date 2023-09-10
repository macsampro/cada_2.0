import { Test, TestingModule } from '@nestjs/testing';
import { SexAnimalsController } from './sex_animals.controller';
import { SexAnimalsService } from './sex_animals.service';

describe('SexAnimalsController', () => {
  let controller: SexAnimalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SexAnimalsController],
      providers: [SexAnimalsService],
    }).compile();

    controller = module.get<SexAnimalsController>(SexAnimalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
