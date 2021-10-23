import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'

@Injectable()
export class BitcoinService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    // return this.httpService
    return 'teste'
  }
}
