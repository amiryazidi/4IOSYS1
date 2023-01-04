import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [
    {id: 1, title: 't-shirt1', price: 20, quantity:10, like:0},
    {id: 2, title: 't-shirt2', price: 10, quantity:0, like:0},
    {id: 3, title: 't-shirt3', price: 120, quantity:2, like:0}
  ];
  
  constructor() {}
    addProduct(product:Product){
      this.products.push(product);
   
  }
}
