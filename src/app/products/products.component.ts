import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'products',
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
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  delete(product: Product) {
    const index = this.products.indexOf(product);
    if(index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
