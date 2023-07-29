import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    //todo потом заменить
    origin: "*",
    exposedHeaders: "X-Total-Count"
  })

  await app.listen(3001);
}
bootstrap();
