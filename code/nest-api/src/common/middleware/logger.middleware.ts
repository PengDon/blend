import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, params } = req;
    console.log(
      `请求类型：${method} \n地址:${originalUrl}  \n参数：${JSON.stringify(
        params,
      )} `,
    );
    next();
  }
}
