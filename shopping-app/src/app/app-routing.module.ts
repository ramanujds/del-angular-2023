import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { appRouteGuard } from './app-route.guard';
import { appDeactivateRouteGuard } from './app-deactivate-route.guard';

const routes: Routes = [
  {
    path:'add-product', component:AddProductComponent, canActivate:[appRouteGuard]
  },
  {
    path:'browse-products', component:ViewProductsComponent
  },
  {
    path:'product/:id', component:ProductDetailsComponent
  },
  {
    path:'update/:id', component:UpdateProductComponent, canDeactivate:[appDeactivateRouteGuard]
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
