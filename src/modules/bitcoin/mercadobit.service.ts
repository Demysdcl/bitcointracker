import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class MercadobitService {
  constructor(private readonly httpService: HttpService) {}

  async getBitcoinValue(): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get(
        'https://cdn.mercadobitcoin.com.br/api/tickers?pairs=BRLBTC',
      ),
    )
    return response.data
  }
}
