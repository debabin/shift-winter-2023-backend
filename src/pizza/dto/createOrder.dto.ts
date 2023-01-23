import { ApiProperty } from '@nestjs/swagger';
import { Details } from '../entities/details.entity';
import { Pizza } from '../entities/pizza.entity';

export class CreateOrder {
  @ApiProperty({ type: [Pizza] })
  pizzas: Pizza[];

  @ApiProperty()
  details: Details;
}
