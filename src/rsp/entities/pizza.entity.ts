import { ApiProperty } from '@nestjs/swagger';

export class Pizza {
  @ApiProperty({ example: 1, description: 'Номер пиццы' })
  id: number;

  @ApiProperty({
    example: 'Буженина с клюквенным соусом',
    description: 'Название пиццы',
  })
  name: string;

  @ApiProperty({
    example: [
      'запеченная буженина из свинины',
      'клюквенный соус',
      'брусника',
      'красный лук',
      'моцарелла',
      'фирменный соус альфредо',
    ],
    description: 'Ингридиенты',
  })
  ingredients: string[];

  @ApiProperty({
    example:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/421b5f7975dd422ea59dbf1d9e1b1b95_138x138.jpeg',
    description: 'Изображение пиццы',
  })
  img: string;

  @ApiProperty({
    example: {
      price: {
        default: 539,
        size: {
          small: 0,
          medium: 100,
          large: 200,
        },
        crust: {
          cheesy: 150,
          cheesySausage: 200,
        },
      },
    },
    description: 'Цена на разные вариации пиццы',
  })
  price: {
    default: number;
    size: {
      small: number;
      medium?: number;
      large?: number;
    };
    crust: {
      cheesy: number;
      cheesySausage: number;
    };
  };

  @ApiProperty({
    example: {
      classifications: {
        new: true,
        hot: false,
        vegetarian: true,
      },
    },
    description: 'Фильтры для пицц',
  })
  classifications: {
    new?: boolean;
    hot?: boolean;
    vegetarian?: boolean;
  };
}
