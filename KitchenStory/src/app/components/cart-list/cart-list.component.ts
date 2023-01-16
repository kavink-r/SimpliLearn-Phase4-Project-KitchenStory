import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { cartitem } from 'src/app/models/cartitem';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cart!: Cart;

  constructor(private cartservice:CartserviceService) { }

  ngOnInit(): void {
    this.updateCart();
  }
  removeFromCart(cartItem:cartitem){
    this.cartservice.removeFromCart(cartItem.food.id);
    this.updateCart();
  }
  changeQuantity(cartItem:cartitem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
    this.updateCart();
  }
  updateCart(){
    this.cart=this.cartservice.getCart();
  }
}
