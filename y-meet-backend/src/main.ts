import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Active le CORS
  app.enableCors({
    origin: ['http://localhost:4200', 'https://mon-domaine.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  const PORT = 3000;
  await app.listen(PORT);
  console.log(`Application running on http://localhost:${PORT}`);
}
bootstrap();
