import { Injectable } from '@nestjs/common';

@Injectable()
export class CliService {


  public async run(runArguments: string[]): Promise<void> {
    console.log(runArguments)
  }
}
