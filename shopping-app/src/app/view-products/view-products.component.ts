import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductDataService } from '../product-data.service';
import { ProductApiService } from '../product-api.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  productList?:Product[];

  constructor(public _productApiService:ProductApiService){}

ngOnInit(): void {
    this._productApiService.fetchAllProducts().subscribe(
      response =>{
        this.productList=response
      }
    )
}

  
}
