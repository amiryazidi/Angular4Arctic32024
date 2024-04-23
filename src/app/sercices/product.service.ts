import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listProduct:Product[]=[
    {id:1,title:'product1',price:1500,quantity:0,like:0},
    {id:2,title:'iphone 12',price:1000,quantity:0,like:0},
    {id:3,title:'product 3',price:2000,quantity:10,like:0},
  ]

  addProduct(p:Product){
    this.listProduct.push(p)
  }
  constructor() { }
}
