import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  birthDate: string;

  @ApiProperty()
  registrationAddress: string;
}

export class Address {
  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  house: string;

  @ApiProperty()
  apartment: string;

  @ApiProperty()
  comment: string;
}

export class Details {
  @ApiProperty({ description: 'Персональные данные', type: User })
  user: User;

  @ApiProperty({
    description: 'Адрес доставки',
    type: Address,
  })
  address: Address;
}
