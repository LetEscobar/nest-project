import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/teste')
  getTeste(): string {
    return this.appService.getTeste();
  }

  @Get('/beto/:id')
  findBeto(@Param('id') id: string) {
    return this.appService.findById(id);
  }

  @Get('/products')
  getProducts() {
    return this.appService.getProducts();
  }
}
