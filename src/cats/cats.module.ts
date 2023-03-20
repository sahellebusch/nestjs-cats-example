import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [HttpModule],
})
export class CatsModule {}
