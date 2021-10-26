import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Bitcoin } from './bitcoin.schema'
import { BitcoinService, Dashboard } from './bitcoin.service'
import { CreateBitCoinDTO } from './dto/create-bitcoin.dto'

@Controller('/bitcoin')
export class BitcoinController {
  constructor(private readonly bitcoinService: BitcoinService) {}

  @Get('value')
  async getBitcoinValue(): Promise<number> {
    return this.bitcoinService.getBitcoinValue()
  }

  @Get()
  async findAll(): Promise<Bitcoin[]> {
    return this.bitcoinService.findAll()
  }

  @Get('total')
  async getTotalInvested(): Promise<number> {
    return this.bitcoinService.getTotalInvested()
  }

  @Get('dashboard')
  async getDashboard(): Promise<Dashboard> {
    return this.bitcoinService.getDashboard()
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Bitcoin> {
    return this.bitcoinService.findById(id)
  }

  @Post()
  async create(@Body() createBitCoinDto: CreateBitCoinDTO): Promise<Bitcoin> {
    return this.bitcoinService.create(createBitCoinDto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Bitcoin> {
    return this.bitcoinService.delete(id)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBitCoinDTO: Bitcoin,
  ): Promise<Bitcoin> {
    return this.bitcoinService.update(id, updateBitCoinDTO)
  }
}
