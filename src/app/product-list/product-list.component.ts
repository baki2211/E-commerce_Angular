import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import  { IProducts } from '../IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  products:IProducts[] = products;

  constructor(private cartService: CartService){}

    addToCart(product: IProducts) {
      window.alert('Added to cart' );
      this.cartService.addToCart(product);
    }
      
      ngOnInit(): void {
   
  }
  
}
