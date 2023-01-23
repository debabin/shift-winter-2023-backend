import { ApiProperty } from '@nestjs/swagger';

export class Answer {
  @ApiProperty()
  result: string;
}
