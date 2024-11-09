import { INestApplication, INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const application: INestApplication = await NestFactory.create(AppModule);
    await application.listen(8080);

    const mircoService: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 3000 },
    });
    await mircoService.listen();
}

bootstrap();
