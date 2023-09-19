import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTeste(): string {
    return 'Bem-vinda Letícia!';
  }

  findById(id: string): string {
    return `Letícia cadastrada com id: ${id}`;
  }

  async getProducts() {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  }
}
