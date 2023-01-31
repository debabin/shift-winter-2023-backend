import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule, Cron } from '@nestjs/schedule';
import { Injectable, Logger } from '@nestjs/common';

import { PizzaModule } from './pizza/pizza.module';
import { RspModule } from './rsp/rsp.module';
import { WakeUpModule } from './wakeup/wakeup.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    PizzaModule,
    RspModule,
    WakeUpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
