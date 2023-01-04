import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  {path:'', redirectTo: '/product', pathMatch:'full' },
  {path:'product',component:ProductsComponent},
  {path:'offre',component:OffresEmploiComponentComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'**',component:PageNotFoundComponent},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
