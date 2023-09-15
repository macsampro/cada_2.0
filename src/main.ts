import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200', // Remplacez par le domaine que vous souhaitez autoriser
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // autorise requete avec token etc..
  };
   

  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Amis des Animaux')
    .setDescription("Description des requêtes de l'équipe des Amis des Animaux")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  //Activation de class validator
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
