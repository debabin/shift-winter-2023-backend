import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOption } from './dto/createOption.dto';
import { Answer } from './entities/answer.entity';

import { RspService } from './rsp.service';

@ApiTags('🪨 rock ✂️ scissor 📑 paper')
@Controller('rsp')
export class RspController {
  constructor(private readonly rspService: RspService) {}

  @Post('/option')
  @ApiOperation({ summary: 'Получить ответ от бота' })
  @ApiResponse({
    status: 200,
    description: 'Option',
    type: Answer,
  })
  getRspOption(@Body() createOption: CreateOption) {
    return {
      result: this.rspService.getOption({ options: createOption.options }),
    };
  }
}
