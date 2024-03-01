// product-item.component.ts
import { Component, Input } from '@angular/core';
import { Product } from './category.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  standalone: true,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  increaseLikes() {
  }

  removeProduct() {
    // 在这里添加删除产品的逻辑
  }
}

class ProductItemComponentImpl extends ProductItemComponent {
}
