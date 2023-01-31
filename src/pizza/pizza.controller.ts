import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrder, CreateOrderResponse } from './dto/createOrder.dto';
import { GetAllPizza } from './dto/getAllPizza.dto';
import { Pizza } from './entities/pizza.entity';
import { PizzaService } from './pizza.service';

@ApiTags('🍕 pizza')
@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get('/')
  @ApiQuery({
    name: 'classifications',
    type: GetAllPizza['classifications'],
    required: false,
  })
  @ApiOperation({ summary: 'Получить все пиццы' })
  @ApiResponse({
    status: 200,
    description: 'Pizzas',
    type: [Pizza],
  })
  getAllPizza(@Query() getAllPizza?: GetAllPizza) {
    return this.pizzaService.getAll({
      classifications: {
        ...(getAllPizza.classifications && {
          [getAllPizza.classifications]: true,
        }),
      },
    });
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Получить пиццу по id ' })
  @ApiResponse({
    status: 200,
    description: 'Pizzas',
    type: [Pizza],
  })
  @ApiResponse({
    status: 404,
    description: 'Not found pizza',
    type: null,
  })
  getPizzaById(@Param() { id }: { id: Pizza['id'] }) {
    const pizza = this.pizzaService.getById({ id: +id });

    if (!pizza) {
      throw new BadRequestException('Invalid pizza id');
    }
    return pizza;
  }

  @Post('/createOrder')
  @ApiOperation({ summary: 'Создать заявку на доставку' })
  @ApiResponse({
    status: 200,
    description: 'Created order',
    type: CreateOrderResponse,
  })
  createPizzaOrder(@Body() createOrder: CreateOrder) {
    let errors = {};
    if (createOrder.details.user.firstname.includes(';'))
      errors = {
        ...errors,
        sender: { firstname: 'Недопустимые символы в имени' },
      };

    if (
      createOrder.details.user.firstname === 'Jack' &&
      createOrder.details.user.lastname === 'Tesla'
    ) {
      errors = {
        ...errors,
        sender: {
          firstname: 'Пользователь забанен',
          lastname: 'Пользователь забанен',
        },
      };
    }

    try {
      const sum = this.pizzaService.calculateOrderSum(createOrder.pizzas);
      const pizzas = this.pizzaService.getByIds(
        createOrder.pizzas.map((pizza) => pizza.id),
      );

      if (Object.keys(errors).length) {
        throw new BadRequestException(errors);
      }

      return {
        order: {
          id: Math.floor(Math.random() * 1000000000),
          sum,
          pizzas,
          order: createOrder,
        },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
