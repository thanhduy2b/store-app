import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div>
      <h1>
        Welcome to {{title}}!
      </h1>
      <products></products>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'App Store';
}
