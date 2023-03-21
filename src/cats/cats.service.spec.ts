import { TestBed } from '@automock/jest';
import { HttpService } from '@nestjs/axios';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;
  let httpService: jest.Mocked<HttpService>;

  beforeEach(async () => {
    const { unit, unitRef } = TestBed.create(CatsService)
      .mock(HttpService)
      .using({ get: jest.fn() })
      .compile();

    service = unit;
    httpService = unitRef.get(HttpService);
  });

  it('will get a cat', async () => {
    service.findCat();
    expect(httpService.get).toHaveBeenCalled();
  });
});
