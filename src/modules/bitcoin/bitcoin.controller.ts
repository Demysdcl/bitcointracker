import { Body, Controller, Get, Post, Put } from '@nestjs/common'
import { Bitcoin } from './Bitcoin'
import { BitcoinService } from './bitcoin.service'
import { CreateBitCoinDTO } from './dto/create-bitcoin.dto'
import { UpdateBitCoinDTO } from './dto/update-bitcoin.dto'

@Controller('/bitcoin')
export class BitcoinController {
  constructor(private readonly BitcoinService: BitcoinService) {}

  @Get()
  getHello(): string {
    return ''
  }

  @Get('/hi')
  getHi(): string {
    return 'Hi bitcoin'
  }

  @Post()
  async create(@Body() createBitcoinDTO: CreateBitCoinDTO): Promise<Bitcoin> {
    return createBitcoinDTO as Bitcoin
  }

  @Put()
  async update(@Body() updateBitcoinDTO: UpdateBitCoinDTO): Promise<Bitcoin> {
    return updateBitcoinDTO as Bitcoin
  }
}
