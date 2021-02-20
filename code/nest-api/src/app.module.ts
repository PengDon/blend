import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

// logger
import { LoggerMiddleware } from './common/middleware/logger.middleware';

// exception
import { ExceptionModule } from './modules/exception/exception.module';

// modules
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, ExceptionModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为user路由添加日志中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes('user');
  }
}
