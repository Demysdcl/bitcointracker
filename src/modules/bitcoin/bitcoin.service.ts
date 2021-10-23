import { Injectable } from '@nestjs/common'
import { MercadobitService } from './mercadobit.service'

@Injectable()
export class BitcoinService {
  constructor(private readonly mercadobitService: MercadobitService) {}

  async getBitcoinValue(): Promise<any> {
    //TODO incluir os calculos
    return this.mercadobitService.getBitcoinValue()
  }
}
