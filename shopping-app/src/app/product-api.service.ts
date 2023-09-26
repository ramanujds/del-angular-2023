import { Injectable } from '@angular/core';
import { Product } from './model/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private productApiUrl = "http://localhost:3500/products"

  constructor(private _httpClient:HttpClient) { }

  addProduct(product: Product) {

  }
  
  fetchAllProducts():Observable<Array<Product>>{
    return this._httpClient.get<Array<Product>>(this.productApiUrl);
  }

  fetchProductById(id:any):Observable<Product>{
    return this._httpClient.get(this.productApiUrl+"/"+id)
  }

  updateProduct(product:Product){

  }

  deleteProduct(id:any){

  }

}
