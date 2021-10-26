import { IsDateString, IsNumber } from 'class-validator'

export class CreateBitCoinDTO {
  @IsNumber()
  fractionQty: number

  @IsNumber()
  purchaseValue: number

  @IsNumber()
  bitcoinValue: number

  @IsDateString()
  purchaseDate: Date
}
