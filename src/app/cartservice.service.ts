import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }
  items:any=[];
  
  addToCart(product:Product){
     this.items.push(product);
     console.log(this.items);
  }

  getItems(){
    return this.items;
    //return this.
  }

  clearcart(){
     this.items=[];
     return this.items;
  }

  shippingprices(){
    return [
      {
        "type": "Overnight",
        "price": 25.99
      },
      {
        "type": "2-Day",
        "price": 9.99
      },
      {
        "type": "Postal",
        "price": 2.99
      }
    ];
  }

}
