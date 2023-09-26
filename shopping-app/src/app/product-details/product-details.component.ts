import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { Product } from '../model/Product';

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
     private _productDataService:ProductDataService){}

ngOnInit(): void {
    this._router.params.subscribe(p=>{
        const id=p['id']
        this.product=this._productDataService.findProductById(id);
        
    }
    )
}
}


