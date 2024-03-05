import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.listen(3000);
  console.log("here");
  if (process.argv.length !== 4) {
    throw Error(`Illegal arguments ${process.argv}, correct form 'node: main [dbPath] [logPath]'`);
  }
}
bootstrap();
