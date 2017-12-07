import { Component } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'product-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let product of products">
          {{product.id}}: {{product.name}}
        </li>
      </ul>
    </div>
  `,
  styles: ['div { border: 1px solid green; }']
})
export class ProductList implements OnInit {
  products: Product[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      new Product(1, 'iPhone'),
      new Product(2, 'iPad'),
      new Product(3, 'Apple TV')
    ];
  }
}
