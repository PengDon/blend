import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局使用日志中间件
  // app.use(logger)

  // ===>swagger start<===
  const config = new DocumentBuilder()
    .setTitle('Nest example')
    .setDescription('The nest API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  // ===>swagger end<===

  await app.listen(3000);
}
bootstrap();
