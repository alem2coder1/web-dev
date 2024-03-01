import { Injectable } from '@angular/core';
import {Category, Product} from '../category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  categories: Category[] = [];

  constructor() {
    // 创建四个类别，每个类别包含五个产品
    for (let i = 1; i <= 4; i++) {
      const category: Category = {
        id: i,
        name: `Category ${i}`,
      };
      for (let j = 1; j <= 5; j++) {
        const product: Product = {
          id: (i - 1) * 5 + j,
          name: `Product ${j}`,
          price: 0, // 添加价格属性
          imageUrl: 'url_to_image', // 添加图片链接属性
          description: 'Description', // 添加描述属性
          link: 'link_to_product_details' // 添加链接属性
        };

      }
      this.categories.push(category);
    }
  }
}
