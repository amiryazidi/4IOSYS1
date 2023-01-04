import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id!:number;
  listPoduct:Product[];
  constructor(private route: ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    console.log(this.route);
   this.id= this.route.snapshot.params['id'];
   this.listPoduct= this.productService.products;
   console.log( this.listPoduct);
  }

}
