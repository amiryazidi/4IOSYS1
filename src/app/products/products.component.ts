import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ConsumerProductService } from '../service/consumer-product.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  titre: string = "Infini";
  listProduct!: Product[];
  priceMax!: number;
  constructor(private productService:ProductService,private consumerProduct:ConsumerProductService) { }

  ngOnInit(): void {
    this.listProduct=this.productService.products;
  /*  this.consumerProduct.getProducts().subscribe({
      next: (data)=>this.listProduct=data,
      error: (error)=>console.log(error),
      complete: () => console.log("im finisging")
    })
 
   */
  }
  buyProdut(i: number){
    this.listProduct[i].quantity--;
  }
incrementLike(i:number){
  this.listProduct[i].like++;
}
Delete(id:number){
  this.consumerProduct.deleteProduct(id).subscribe();
/* this.consumerProduct.deleteProduct(id).subscribe({
    next: ()=>this.listProduct=this.listProduct.filter((p)=>p.id != id) 
  })
*/
}
}
