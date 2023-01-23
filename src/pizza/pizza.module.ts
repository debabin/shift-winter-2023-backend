import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';

@Module({
  imports: [],
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}
