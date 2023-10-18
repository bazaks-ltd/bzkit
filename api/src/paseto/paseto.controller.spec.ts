import { Test, TestingModule } from '@nestjs/testing';
import { PasetoController } from './paseto.controller';

describe('PasetoController', () => {
  let controller: PasetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasetoController],
    }).compile();

    controller = module.get<PasetoController>(PasetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
