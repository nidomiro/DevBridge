import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { CliService } from './cli/cli.service';

@Module({
  imports: [],
  providers: [AppService, CliService],
})
export class AppModule {}
