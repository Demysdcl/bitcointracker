import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BitcoinModule } from './modules/bitcoin/bitcoin.module'

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot(
      'mongodb+srv://omnistackjs:JJbu22GTEnG20pjn@cluster0.othjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    BitcoinModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
