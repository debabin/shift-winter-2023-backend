export interface Pizza {
  id: number;
  name: string;
  ingredients: string[];
  img: string;
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
  classifications: {
    new?: boolean;
    hot?: boolean;
    vegetarian?: boolean;
  };
}

const PIZZAS: Pizza[] = [
  {
    id: 1,
    name: 'Буженина с клюквенным соусом',
    ingredients: [
      'запеченная буженина из свинины',
      'клюквенный соус',
      'брусника',
      'красный лук',
      'моцарелла',
      'фирменный соус альфредо',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/421b5f7975dd422ea59dbf1d9e1b1b95_138x138.jpeg',
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
    classifications: {
      new: true,
      hot: false,
      vegetarian: true,
    },
  },
];

import { Injectable } from '@nestjs/common';

@Injectable()
export class PizzaService {
  getAll({ classifications }: { classifications?: Pizza['classifications'] }) {
    return PIZZAS.filter((pizza) => {
      if (!classifications) return true;

      const isHot =
        !classifications.hot ||
        classifications.hot === pizza.classifications.hot;
      const isVegetarian =
        !classifications.vegetarian ||
        classifications.vegetarian === pizza.classifications.vegetarian;
      const isNew =
        !classifications.new ||
        classifications.new === pizza.classifications.new;

      return isHot && isVegetarian && isNew;
    });
  }

  getById({ id }: { id: Pizza['id'] }) {
    return PIZZAS.find((pizza) => pizza.id === id);
  }
}
