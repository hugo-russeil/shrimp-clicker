/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {

  // Global application module
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Setup global exchange endpoint
  app.setGlobalPrefix('api');

  // Setup Swagger documentation if we are in dev mode
  if(process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle("Nuit de l'info 2024 - Void LR - API Documentation")
      .setVersion('1.0')
      .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config, {
      deepScanRoutes: true,
      autoTagControllers: true
    });

    SwaggerModule.setup('swagger', app, documentFactory, {
      jsonDocumentUrl: 'swagger/json',
    });

    Logger.warn("Swagger has been setup since the app has not been started in production mode", "App")
  }

  app.use(helmet())
  Logger.log("HelmetJS HTTP Headers defense middleware has been setup")

  app.set('trust proxy', 'loopback');
  Logger.warn("Trusting requests from the loopback address")

  Logger.log("API starting on port 3000", "App")
  await app.listen(process.env.port ?? 3000);
}

bootstrap();
