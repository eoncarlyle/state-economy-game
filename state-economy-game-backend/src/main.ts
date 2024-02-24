import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  if (process.argv.length !== 3) {
    throw Error(`Illegal arguments ${process.argv}, correct form node: main [dbPath]`);
  }
}
bootstrap();
