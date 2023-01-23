import { ApiProperty } from '@nestjs/swagger';

export class GetAllPizza {
  @ApiProperty({ example: 'new' })
  classifications?: 'new' | 'spicy' | 'vegetarian';
}
