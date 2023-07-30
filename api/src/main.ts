import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { AdminSourceInterceptor } from "./interceptors/AdminSource.interceptor";
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
  });

  app.useGlobalPipes(new ValidationPipe({
  }))

  app.enableCors({
    //todo потом заменить
    origin: "*",
    exposedHeaders: "X-Total-Count",
    // allowedHeaders: "Content-Type"
  })

  await app.listen(3001);
}
bootstrap();
