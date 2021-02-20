import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

// logger
import { LoggerMiddleware } from './common/middleware/logger.middleware';

// modules
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule],
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
