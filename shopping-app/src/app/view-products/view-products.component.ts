import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent {

  constructor(public _productDataService:ProductDataService){}

  
}
