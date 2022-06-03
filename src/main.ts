import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 5000;
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
    exposedHeaders: 'x-total-count',
  });
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
