import * as mongoose from 'mongoose'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://admin:admin@bitcoindb.hso00.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritymongodb+srv://admin',
      ),
  },
]
