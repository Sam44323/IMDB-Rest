import { Module } from '@nestjs/common';
import { ImdbModule } from './imdb/imdb.module';

@Module({
  imports: [ImdbModule],
})
export class AppModule {}
