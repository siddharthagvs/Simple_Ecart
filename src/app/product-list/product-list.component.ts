import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }
  

  share() {
        alert("product details has been shared in whatsapp!!")
  }
  Notify() {
    alert("Product will be Notified when Available!!")
  }

}
