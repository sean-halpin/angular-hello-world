import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-share',
  templateUrl: './product-share.component.html',
  styleUrls: ['./product-share.component.css']
})
export class ProductShareComponent {
  @Input() product;
  @Output() notify = new EventEmitter();
}