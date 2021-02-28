/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { CliService } from './app/cli/cli.service';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);

  const cli = await appContext.resolve(CliService)
  await cli.run(process.argv)
}

bootstrap().catch(error => Logger.error(`An global uncached error occurred: ${JSON.stringify(error)}`));
