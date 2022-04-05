import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productid: any;
  Product:Product | undefined;
  product_values: any; 
  productID: any;

  constructor(public route:ActivatedRoute, public cartservice:CartserviceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      this.productid=Number(param.get('productId'))
       this.product_values= products.find((Product)=> Product.id=== this.productid);
    })
  }
  addToCart(product:Product, productid:any){
    this.cartservice.addToCart(product);
    //this.cartservice.addToCart(this.productID=this.productid);
    alert("Product has been added to the cart!!")
  }
}
