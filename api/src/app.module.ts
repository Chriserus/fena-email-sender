import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {BullModule} from "@nestjs/bull";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
      },
    }),
    BullModule.registerQueueAsync(
      {
        name: 'email',
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
