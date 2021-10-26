import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Bitcoin, BitcoinDocument } from './bitcoin.schema'
import { CreateBitCoinDTO } from './dto/create-bitcoin.dto'
import { MercadobitService } from './mercadobit.service'

export type Dashboard = {
  fractions: number
  totalInvested: number
}

@Injectable()
export class BitcoinService {
  constructor(
    private readonly mercadobitService: MercadobitService,
    @InjectModel(Bitcoin.name) private bitcoinModel: Model<BitcoinDocument>,
  ) {}

  async getBitcoinValue(): Promise<number> {
    const bitcoin = await this.mercadobitService.getBitcoinValue()
    return bitcoin.ticker[0].buy
  }

  async getTotalInvested(): Promise<number> {
    const bitcoins = await this.bitcoinModel.find().exec()

    return (bitcoins as Bitcoin[]).reduce(
      (acc: number, acur: Bitcoin) => (acc += acur.purchaseValue),
      0,
    )
  }

  async getDashboard(): Promise<Dashboard> {
    const bitcoins = await this.bitcoinModel.find().exec()

    const totalInvested = bitcoins.reduce(
      (acc: number, acur: Bitcoin) => (acc += acur.purchaseValue),
      0,
    )

    const fractions = bitcoins.reduce(
      (acc: number, acur: Bitcoin) => (acc += acur.fractionQty),
      0,
    )

    return { totalInvested, fractions }
  }

  async create(createBitCoinDto: CreateBitCoinDTO): Promise<BitcoinDocument> {
    const createBitcoin = new this.bitcoinModel(createBitCoinDto)
    return createBitcoin.save()
  }

  async findAll(): Promise<BitcoinDocument[]> {
    return this.bitcoinModel.find().exec()
  }

  async findById(id: string): Promise<Bitcoin> {
    return this.bitcoinModel.findById(id).exec()
  }

  async update(id: string, bitcoin: Bitcoin): Promise<Bitcoin> {
    return this.bitcoinModel.findByIdAndUpdate(id, bitcoin).exec()
  }

  async delete(id: string) {
    const bitcoinRemoved = this.bitcoinModel
      .findOneAndDelete({ _id: id })
      .exec()

    return (await bitcoinRemoved).remove()
  }
}
