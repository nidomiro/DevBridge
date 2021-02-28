import { Test } from '@nestjs/testing';
import { SharedInterfaceDockerComposeService } from './shared-interface-docker-compose.service';

describe('SharedInterfaceDockerComposeService', () => {
  let service: SharedInterfaceDockerComposeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedInterfaceDockerComposeService],
    }).compile();

    service = module.get(SharedInterfaceDockerComposeService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
