import { Module } from '@nestjs/common';
import { RspController } from './rsp.controller';
import { RspService } from './rsp.service';

@Module({
  imports: [],
  controllers: [RspController],
  providers: [RspService],
})
export class RspModule {}
