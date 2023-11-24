import { NestFactory } from '@nestjs/core';
import { AppModule } from './main/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Todo list')
    .setDescription('Simple Todo List NestJS Practice')
    .setVersion('0.0.0')
    .addTag('todolist')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
