import { Component, Input } from '@angular/core';
import { Product } from '../model/Product';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(private _productApiService:ProductApiService,
    private _router:Router){}

  @Input('product')
  product?:Product

  deleteProduct(id:any){
    if(confirm("Delete product with id: "+id)){
      this._productApiService.deleteProduct(id).subscribe(
        respsonse => alert(`Product with id : ${id} Deleted`)
      )
    }
  }

  navigateToProductDetails(id:any){
    this._router.navigate(['/product/'+id])
  }


}
