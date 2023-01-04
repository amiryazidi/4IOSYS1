import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ConsumerProductService } from '../service/consumer-product.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Product;

  constructor(private productService:ProductService,private router:Router,private consumerProduct:ConsumerProductService) { }

  ngOnInit(): void {
    this.product = new Product();
  }
  ajouter(){
    console.log(this.product)
    this.productService.addProduct(this.product);
    this.router.navigateByUrl('/product');
    /*this.consumerProduct.addProduct(this.product).subscribe({
      next:()=>this.router.navigateByUrl('product')
    })
    */
  }

}
