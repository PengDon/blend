/*
 * @Author: don
 * @Date: 2021-02-20 17:38:06
 * @LastEditors: don
 * @LastEditTime: 2021-02-20 17:42:25
 * @Description:
 */
import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';
import { ExceptionService } from './exception.service';

@Module({
  controllers: [ExceptionController],
  providers: [ExceptionService],
})
export class ExceptionModule {}
