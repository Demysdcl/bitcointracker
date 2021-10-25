import { Controller, Get } from '@nestjs/common'
import { BitcoinService } from './bitcoin.service'

@Controller('/bitcoin')
export class BitcoinController {
  constructor(private readonly bitcoinService: BitcoinService) {}

  @Get()
  async getBitcoinValue(): Promise<number> {
    return this.bitcoinService.getBitcoinValue()
  }
}
