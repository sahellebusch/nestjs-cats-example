import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  findCat() {
    return this.httpService.get('https://cataas.com/cat?json=true');
  }
}
