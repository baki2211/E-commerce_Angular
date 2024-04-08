import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  total!:number;
  discount!:number;
  service!: number;
  items:IProducts[]=[];
  
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.items= this.cartService.getItems();
    this.total= this.cartService.getTotal();
    this.discount= this.cartService.getDiscount();
    this.service= this.cartService.addService();
  }

}
