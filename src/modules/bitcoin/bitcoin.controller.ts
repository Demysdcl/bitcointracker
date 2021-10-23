import { Controller, Get, Post } from '@nestjs/common'
import { BitcoinService } from './bitcoin.service'

@Controller('/bitcoin')
export class BitcoinController {
  constructor(private readonly bitcoinService: BitcoinService) {}

  @Get()
  async getBitcoinValue(): Promise<any> {
    
    return this.bitcoinService.getBitcoinValue()
  }

  @Post()
  testPost(): any {
    return { test: 'init' }
  }

  @Get('/hi')
  getHi(): string {
    return 'Hi bitcoin'
  }
}
