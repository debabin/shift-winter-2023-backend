import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PizzaModule } from './pizza/pizza.module';
import { RspModule } from './rsp/rsp.module';

@Module({
  imports: [ConfigModule.forRoot(), PizzaModule, RspModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
