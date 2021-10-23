import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BitcoinModule } from './modules/bitcoin/bitcoin.module'
import { DatabaseModule } from './modules/database/database.module'

@Module({
  imports: [BitcoinModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
