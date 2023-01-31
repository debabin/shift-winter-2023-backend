import { ApiProperty } from '@nestjs/swagger';
import { Details } from '../entities/details.entity';
import { OrderedPizza } from '../entities/pizza.entity';

export class CreateOrder {
  @ApiProperty({
    type: [OrderedPizza],
  })
  pizzas: OrderedPizza[];

  @ApiProperty()
  details: Details;
}

export class CreateOrderResponse {
  id: number;
  sum: number;
  order: CreateOrder;
}
export { OrderedPizza };
