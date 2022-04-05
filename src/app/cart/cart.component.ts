import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  productid:any;
  shipping: any;
  //public cart:any;

 name='';
 address='';
  

  constructor(public cartser:CartserviceService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.productid=Number(param.get('productId'))
    })
    this.items=this.cartser.getItems();
    this.shipping=this.cartser.shippingprices();
  }
 
removeitem(items1:any){
  this.items.pop(items1);
}

purchase(name:any){
  alert(`Order Placed for ${name}`);
  this.items=this.cartser.clearcart();
  // this.cart.reset();
 this.name='';
  this.address='';
   
}

}
