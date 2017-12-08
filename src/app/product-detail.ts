import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'product-detail',
  template: `
    <div *ngIf="product">
      <div>Name: {{product.name}}</div>
      <div>Price: {{product.price}}</div>
      <div>Description: {{product.description}}</div>
      <button (click)="requestDelete()">delete</button>
    </div>`
})
export class ProductDetailComponent {
  @Input()
  product: Product;

  @Output()
  deleteProduct = new EventEmitter<Product>();

  requestDelete() {
    this.deleteProduct.emit(this.product);
  }
}
