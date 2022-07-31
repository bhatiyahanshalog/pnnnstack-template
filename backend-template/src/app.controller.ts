import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/res')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): any {
    return this.appService.getHello();
  }
}
