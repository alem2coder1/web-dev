// product-list.component.ts

import { Component, Input } from '@angular/core';
import { Category } from './category.model'; // 假设你的 Category 类型定义在 models.ts 文件中

class ProductService {
    getProducts() {
        throw new Error('Method not implemented.');
    }
}

@Component({
  selector: 'app-product-list', // 组件的选择器
  templateUrl: './product-list.component.html', // 组件的模板文件
  styleUrls: ['./product-list.component.css'] // 组件的样式文件
})
export class ProductListComponent {
  @Input() category!: Category; // 声明组件的输入属性
  products: any[] | undefined;
  // 可以在这里编写其他必要的代码，例如组件类的方法和属性
  private productService: any;
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products: any[] | undefined) => {
        this.products = products;
      },
      error: (error: any) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}
