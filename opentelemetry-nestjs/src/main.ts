import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT: number = 8080;

async function bootstrap() {
    const app: INestApplication = await NestFactory.create(AppModule);
    await app.listen(PORT);
}

bootstrap();
