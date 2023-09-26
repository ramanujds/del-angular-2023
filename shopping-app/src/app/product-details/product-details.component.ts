import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { Product } from '../model/Product';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

// {
//   path:'product/:id', component:ProductDetailsComponent
// }

export class ProductDetailsComponent implements OnInit {

  product?:Product;

constructor(private _router:ActivatedRoute,
    private _routerObj:Router,
     private _productApiService:ProductApiService){}

ngOnInit(): void {
    this._router.params.subscribe(p=>{
        const id=p['id']
        
        this._productApiService.fetchProductById(id).subscribe(
          response =>  this.product=response
        )
        
    }
    )
}
openUpdatePage(id:any){
  this._routerObj.navigate(['/update/'+id])
}
}


