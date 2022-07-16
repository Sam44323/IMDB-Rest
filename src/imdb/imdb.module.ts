import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImdbController } from './imdb.controller';
import { ImdbService } from './imdb.service';

import { IMDBSchema } from './imdb.model';
import { IMDBConstants } from './imdb.constants';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { UserSchema } from 'src/user/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'IMDB', schema: IMDBSchema },
      { name: 'User', schema: UserSchema },
    ]),
    HttpModule,
  ],
  controllers: [ImdbController],
  providers: [ImdbService, IMDBConstants],
})
export class ImdbModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: 'imdb',
      method: RequestMethod.ALL,
    });
  }
}
