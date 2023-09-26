import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product?: Product;

  constructor(private _router: ActivatedRoute,
    private _productApiService: ProductApiService) { }

  ngOnInit(): void {

    this._router.params.subscribe(p => {
      const id = p['id']
      this._productApiService.fetchProductById(id)
        .subscribe(
          response => this.product = response
        )

    }
    )
  }

  updateProduct(product: Product) {

  }

}
