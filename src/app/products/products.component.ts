import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
title : string ;
listProduct: Product[];
  constructor() { }

  ngOnInit(): void {
    this.title = "welcome to products page";
    this.listProduct = [
      {id: 1, title: 't-shirt1', price: 20, quantity:10, like:0},
      {id: 2, title: 't-shirt2', price: 10, quantity:0, like:0},
      {id: 3, title: 't-shirt3', price: 120, quantity:2, like:0}
    ]
  }
incrementLike(i:number){
  this.listProduct[i].like++;
}
}
