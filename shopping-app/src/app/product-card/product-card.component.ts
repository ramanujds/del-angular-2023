import { Component, Input } from '@angular/core';
import { Product } from '../model/Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(private _productDateService:ProductDataService){}

  @Input('product')
  product?:Product

  deleteProduct(id:any){
    if(confirm("Delete product with id: "+id)){
      this._productDateService.deleteProduct(id)
    }
  }

}
