import { Module } from '@nestjs/common';
import { ImdbController } from './imdb.controller';

@Module({
  controllers: [ImdbController],
})
export class ImdbModule {}
