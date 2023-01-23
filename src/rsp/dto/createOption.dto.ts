import { ApiProperty } from '@nestjs/swagger';

export class CreateOption {
  @ApiProperty({ type: [String] })
  options: string[];
}
