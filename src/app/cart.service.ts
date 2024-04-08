import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: IProducts[] = [];

  constructor() { }

  addToCart(product: IProducts) {
      this.items.push(product);
    
    
  }
  getTotal():number {
    let total: number = 0;
    this.items.forEach((product:IProducts)=>{
      total += product.price 
    })
   return total;
   }

   addService():number{
    let service = 0;
    service += (this.getTotal()*10)/100;
    return service;
   }
   getDiscount():number{
    let discount: number = 0;
    if(this.getTotal() > 40){
     discount += (this.getTotal()*15)/100
      return discount;
    }else{
      return 0;
    }
   }
  
  getItems() {
    return  this.items;
  }
  
  clearCart() {
    this.items = [];
    return  this.items;
  }
}
