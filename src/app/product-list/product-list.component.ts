import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  s = products;

  share(str) {
    window.alert(`The product has been shared! ${str}`);
  }

  onNotify(str) {
    window.alert(`You will be notified when the product goes on sale: ${str}`);
  }
}
