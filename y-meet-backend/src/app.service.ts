import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'villecomment sur Y-Meet!';
  }
}
