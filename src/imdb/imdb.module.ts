import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImdbController } from './imdb.controller';
import { ImdbService } from './imdb.service';

import { IMDBSchema } from './imdb.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'IMDB', schema: IMDBSchema }]),
    HttpModule,
  ],
  controllers: [ImdbController],
  providers: [ImdbService],
})
export class ImdbModule {}
