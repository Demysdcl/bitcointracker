import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitcoinModule } from './modules/bitcoin/bitcoin.module';

@Module({
  imports: [BitcoinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
