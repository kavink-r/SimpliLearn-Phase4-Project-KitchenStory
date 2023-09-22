import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart:Cart=new Cart();
  constructor(private cartservice:CartserviceService) { }

  ngOnInit(): void {
    this.cart = this.cartservice.getCart();
  }
  
}
