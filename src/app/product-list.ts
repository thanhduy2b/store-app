import { Component, OnInit } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'product-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let product of products"
          (click)="selectedProduct = product">
          {{product.id}}: {{product.name}}
        </li>
      </ul>
    </div>
    <product-detail [product] = "selectedProduct"
      (deleteProduct) = "delete($event)">
    </product-detail>`,
  styles: ['div { border: 1px solid green; } li { cursor: pointer; }']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  ngOnInit(): void {
    this.products = [
      new Product(1, 'iPhone', 1000, 'This is iPhone!'),
      new Product(2, 'iPad', 1200, 'This is iPad!'),
      new Product(3, 'Apple TV', 800, 'This is Apple TV!')
    ];
  }

  delete(product: Product) {
    const index = this.products.indexOf(product);
    if(index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
