import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  create(arg0: any) {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
