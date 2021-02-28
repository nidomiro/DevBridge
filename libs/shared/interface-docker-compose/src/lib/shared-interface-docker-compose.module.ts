import { Module } from '@nestjs/common';
import { SharedInterfaceDockerComposeService } from './shared-interface-docker-compose.service';

@Module({
  controllers: [],
  providers: [SharedInterfaceDockerComposeService],
  exports: [SharedInterfaceDockerComposeService],
})
export class SharedInterfaceDockerComposeModule {}
