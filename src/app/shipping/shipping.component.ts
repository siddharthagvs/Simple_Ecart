import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
shippingprices:any=[];
  constructor(public data:CartserviceService) { }

  ngOnInit(): void {
    this.shippingprices=this.data.shippingprices();
  }
}
