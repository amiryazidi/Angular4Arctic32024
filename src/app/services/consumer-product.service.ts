import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private http:HttpClient) { }
api : string = "http://localhost:3000/products/"
  getProduct(){
    return this.http.get<Product[]>(this.api)
  }
  getProductById(id:number){
    return this.http.get<Product>(this.api+id)
  }
}
