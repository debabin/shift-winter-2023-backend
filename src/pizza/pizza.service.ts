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
    spicy?: boolean;
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
      spicy: false,
      vegetarian: false,
    },
  },
  {
    id: 2,
    name: 'Мясной микс',
    ingredients: [
      'запеченная буженина из свинины',
      'острая чоризо',
      'пикантная пепперони',
      'бекон',
      'моцарелла',
      'фирменный томатный соус',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9f97c31be5ed477db2dd842f42e80816_138x138.jpeg',
    price: {
      default: 469,
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
      new: false,
      spicy: false,
      vegetarian: false,
    },
  },
  {
    id: 3,
    name: 'Сырная',
    ingredients: [
      'моцарелла',
      'сыры чеддер и пармезан',
      'фирменный соус альфредо',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_138x138.jpeg',
    price: {
      default: 289,
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
      new: false,
      spicy: false,
      vegetarian: false,
    },
  },
  {
    id: 4,
    name: 'Ветчина и сыр',
    ingredients: ['ветчина', 'моцарелла', 'фирменный соус альфредо'],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cea570842b754c52b786c231c65bd2e2_138x138.jpeg',
    price: {
      default: 309,
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
      new: false,
      spicy: false,
      vegetarian: false,
    },
  },
  {
    id: 5,
    name: 'Пепперони фреш',
    ingredients: [
      'пикантная пепперони',
      'увеличенная порция моцареллы',
      'томаты',
      'фирменный томатный соус',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/27c9bbd0af3a4d1d84a086d9c2f1656d_138x138.jpeg',
    price: {
      default: 289,
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
      new: false,
      spicy: false,
      vegetarian: false,
    },
  },
  {
    id: 6,
    name: 'Чоризо фреш',
    ingredients: [
      'фирменный томатный соус',
      'моцарелла',
      'острая чоризо',
      'сладкий перец',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_138x138.jpeg',
    price: {
      default: 289,
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
      new: false,
      spicy: false,
      vegetarian: false,
    },
  },
  {
    id: 7,
    name: 'Додо микс',
    ingredients: [
      'бекон',
      'цыпленок',
      'ветчина',
      'соус песто',
      'кубики брынзы',
      'томаты',
      'красный лук',
      'моцарелла',
      'фирменный соус альфредо',
      'чеснок',
      'итальянские травы',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e47fda53ae2441a8850d9a9319ec7071_138x138.jpeg',
    price: {
      default: 469,
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
      new: false,
      spicy: true,
      vegetarian: false,
    },
  },
  {
    id: 8,
    name: 'Бургер пицца',
    ingredients: [
      'ветчина',
      'маринованные огурчики',
      'томаты',
      'красный лук',
      'чеснок сухой',
      'соус бургер',
      'моцарелла',
      'фирменный томатный соус',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1a9252b622b6494ebde59163374402a9_138x138.jpeg',
    price: {
      default: 419,
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
      spicy: false,
      vegetarian: false,
    },
  },
  {
    id: 9,
    name: 'Карбонара',
    ingredients: [
      'бекон',
      'сыры чеддер и пармезан',
      'моцарелла',
      'томаты',
      'красный лук',
      'чеснок',
      'фирменный соус альфредо',
      'итальянские травы',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9f54fa5d2d204f5fa70579e2e1982d03_138x138.jpeg',
    price: {
      default: 469,
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
      new: false,
      spicy: true,
      vegetarian: false,
    },
  },
  {
    id: 10,
    name: 'Овощи и грибы',
    ingredients: [
      'шампиньоны',
      'томаты',
      'сладкий перец',
      'красный лук',
      'кубики брынзы',
      'моцарелла',
      'фирменный томатный соус',
      'итальянские травы',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d6c9f93ea37649ac923e9586c034a5a0_138x138.jpeg',
    price: {
      default: 419,
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
      new: false,
      spicy: false,
      vegetarian: true,
    },
  },
  {
    id: 11,
    name: 'Маргарита',
    ingredients: [
      'увеличенная порция моцареллы',
      'томаты',
      'итальянские травы',
      'фирменный томатный соус',
    ],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_138x138.jpeg',
    price: {
      default: 369,
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
      new: false,
      spicy: false,
      vegetarian: true,
    },
  },
  {
    id: 12,
    name: 'Гавайская',
    ingredients: ['ветчина', 'ананасы', 'моцарелла', 'фирменный томатный соус'],
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/9b0c599124a8414f89fd59967f3baa3d_138x138.jpeg',
    price: {
      default: 419,
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
      new: false,
      spicy: false,
      vegetarian: true,
    },
  },
];

import { Injectable } from '@nestjs/common';
import { OrderedPizza } from './entities/pizza.entity';

@Injectable()
export class PizzaService {
  getAll({ classifications }: { classifications?: Pizza['classifications'] }) {
    return PIZZAS.filter((pizza) => {
      if (!classifications) return true;

      const isHot =
        !classifications.spicy ||
        classifications.spicy === pizza.classifications.spicy;
      const isVegetarian =
        !classifications.vegetarian ||
        classifications.vegetarian === pizza.classifications.vegetarian;
      const isNew =
        !classifications.new ||
        classifications.new === pizza.classifications.new;

      return isHot && isVegetarian && isNew;
    });
  }

  calculateOrderSum(orderePizzaz: OrderedPizza[]) {
    let sum = 0;

    orderePizzaz.forEach((orderePizza) => {
      const pizza = PIZZAS.find((pizza) => pizza.id === orderePizza.id);
      if (!pizza) throw new Error('Wrong pizza id');

      sum += pizza.price.default + pizza.price.size[orderePizza.size];
      if (orderePizza.crust) {
        sum += pizza.price.crust[orderePizza.crust];
      }
    });

    return sum;
  }

  getByIds(ids: Pizza['id'][]) {
    return ids.map((id) => {
      const pizza = PIZZAS.find((pizza) => pizza.id === id);
      if (!pizza) throw new Error('Wrong pizza id');

      return pizza;
    });
  }

  getById({ id }: { id: Pizza['id'] }) {
    return PIZZAS.find((pizza) => pizza.id === id);
  }
}
