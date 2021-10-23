import { Controller, Get } from '@nestjs/common';
import { BitcoinService } from './bitcoin.service';

@Controller('/bitcoin')
export class BitcoinController {
  constructor(private readonly BitcoinService: BitcoinService) {}

  @Get()
  getHello(): string {
    return this.BitcoinService.getHello();
  }

  @Get('/hi')
  getHi(): string {
    return 'Hi bitcoin';
  }
}
