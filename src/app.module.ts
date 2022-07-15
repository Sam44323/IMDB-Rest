import { Module } from '@nestjs/common';
import { ImdbModule } from './imdb/imdb.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ImdbModule, MongooseModule.forRoot(process.env.MONGO_URI)],
})
export class AppModule {}
