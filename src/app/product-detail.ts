import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'product-detail',
  template: `
    <div *ngIf="product">
      <form>
       <fieldset>
        <legend>Detail:</legend>
        Name: <input [(ngModel)]="product.name" [ngModelOptions]="{standalone: true}"><br>
        Price: <input [(ngModel)]="product.price" [ngModelOptions]="{standalone: true}"><br>
        Description: <input [(ngModel)]="product.description" [ngModelOptions]="{standalone: true}">
       </fieldset>
       <button (click)="requestDelete()">delete</button>
      </form>
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
