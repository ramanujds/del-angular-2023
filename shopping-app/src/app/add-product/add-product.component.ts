import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private _productDataService:ProductDataService){
  }


addProduct(product:Product){
  this._productDataService.addProduct(product)
}

}
