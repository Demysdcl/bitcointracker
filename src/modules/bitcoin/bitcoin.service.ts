import { Injectable } from '@nestjs/common'
import { MercadobitService } from './mercadobit.service'

@Injectable()
export class BitcoinService {
  constructor(private readonly mercadobitService: MercadobitService) {}

  async getBitcoinValue(): Promise<number> {
    const bitcoin = await this.mercadobitService.getBitcoinValue()
    return bitcoin.ticker[0].buy
  }
}
