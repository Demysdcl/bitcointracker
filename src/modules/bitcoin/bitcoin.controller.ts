import { Controller, Get } from '@nestjs/common'
import { BitcoinService } from './bitcoin.service'

@Controller('/bitcoin')
export class BitcoinController {
  constructor(private readonly bitcoinService: BitcoinService) {}

  @Get()
  async getBitcoinValue(): Promise<any> {
    return this.bitcoinService.getBitcoinValue()
  }

  @Get('/hi')
  getHi(): string {
    return 'Hi bitcoin'
  }
}
