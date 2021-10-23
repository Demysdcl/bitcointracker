import { Injectable } from '@nestjs/common'

@Injectable()
export class BitcoinService {
  getHello(): string {
    return 'Hello World Bitcoin!'
  }
}
