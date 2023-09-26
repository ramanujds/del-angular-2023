import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path:'add-product', component:AddProductComponent
  },
  {
    path:'browse-products', component:ViewProductsComponent
  },
  {
    path:'product/:id', component:ProductDetailsComponent
  },
  {
    path:'error', component:ErrorPageComponent
  },
  {
    path:'**',redirectTo:'/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
