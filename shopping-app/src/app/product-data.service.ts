import { Injectable } from '@angular/core';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  productList:Product[]=[
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 150000,
      description: "This is the latest iPhone from 2023",
      image: 'https://source.unsplash.com/random/200x200?sig=1'
  
    },
    {
      id: 2,
      name: "Galaxy S23 Ultra",
      price: 140000,
      description: "This is the latest Samsung Galaxy",
      image: 'https://source.unsplash.com/random/200x200?sig=2'
    },
  
    {
      id: 3,
      name: "MacBook Pro",
      price: 250000,
      description: "This is the latest MacBook Pro from 2023",
      image: 'https://source.unsplash.com/random/200x200?sig=3'
   }
  ]


  addProduct(product:Product){
    product.image='https://source.unsplash.com/random/200x200?sig='+product.id;
    this.productList.push(product);
  }

  deleteProduct(id:any){
    const index = this.productList.findIndex(p=>p.id==id)
    
      this.productList.splice(index,1)
    
  }

  


  
}
