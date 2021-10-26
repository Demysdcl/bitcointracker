import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type BitcoinDocument = Bitcoin & Document

@Schema()
export class Bitcoin {
  @Prop()
  fractionQty: number

  @Prop()
  purchaseValue: number

  @Prop()
  bitcoinValue: number

  @Prop()
  purchaseDate: Date
}

export const BitcoinSchema = SchemaFactory.createForClass(Bitcoin)
