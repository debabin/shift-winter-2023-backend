import { Module } from '@nestjs/common';

import { PizzaModule } from './pizza/pizza.module';
import { RspModule } from './rsp/rsp.module';

@Module({
  imports: [PizzaModule, RspModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
