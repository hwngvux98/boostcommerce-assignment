import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getParkingFee', () => {
    it('should return total parking fee in $', () => {
      const result = '5$';
      const data = {
        timeInDate: '1 Jul 2021 00:09:00 GMT'
      }
      const appController = app.get<AppController>(AppController);
      expect(appController.getParkingFee(data)).toBe(result);
    });
  })
});
