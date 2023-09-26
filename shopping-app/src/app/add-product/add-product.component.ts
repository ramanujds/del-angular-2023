import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private _productApiService:ProductApiService,
    private _router:Router){
  }


addProduct(product:Product){
  this._productApiService.addProduct(product).subscribe(
    response => {
      console.log(response)
      this._router.navigate(['/browse-products'])
    }
  )
}
  

  
}
