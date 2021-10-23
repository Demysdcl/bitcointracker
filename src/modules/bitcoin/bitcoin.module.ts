import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { BitcoinController } from './bitcoin.controller'
import { BitcoinService } from './bitcoin.service'
import { MercadobitService } from './mercadobit.service'

@Module({
  imports: [HttpModule],
  controllers: [BitcoinController],
  providers: [BitcoinService, MercadobitService],
})
export class BitcoinModule {}
