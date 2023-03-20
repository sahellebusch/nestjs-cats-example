import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  findAll() {
    return `This action returns all cats`;
  }
}
