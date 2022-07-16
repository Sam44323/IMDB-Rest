import { Module } from '@nestjs/common';
import { ImdbModule } from './imdb/imdb.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ImdbModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      connectionFactory: (connection) => {
        if (connection.readyState === 1) {
          console.log('DB connected');
        }

        connection.on('disconnected', () => {
          console.log('DB disconnected');
        });

        return connection;
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
