import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = parseInt(process.env.PORT);
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.enableCors({
    origin: process.env.ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
    exposedHeaders: 'x-total-count',
  });
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
