import { Injectable } from '@nestjs/common';

@Injectable()
export class RspService {
  getOption({ options }: { options: string[] }) {
    return options[Math.floor(Math.random() * options.length)];
  }
}
