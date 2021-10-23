import { Injectable } from '@nestjs/common';
import { Bitcoin } from './Bitcoin';

@Injectable()
export class BitcoinRepository {
  listAll(): Bitcoin[] {
    return [];
  }
}
