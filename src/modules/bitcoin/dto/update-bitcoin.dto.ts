import { IsDateString, IsNumber } from 'class-validator'
import { IsObjectId } from 'class-validator-mongo-object-id'

export class UpdateBitCoinDTO {
  @IsObjectId()
  _id: string

  @IsNumber()
  fractionQty: number

  @IsNumber()
  purchaseValue: number

  @IsNumber()
  bitcoinValue: number

  @IsDateString()
  purchaseDate: Date
}
