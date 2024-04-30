import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../sercices/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number
  alert!:number
  listProduct!:Product[]

  constructor(private Ps: ProductService, private cl :CalculService, private cons:ConsumerProductService) {}

  ngOnInit(){
    this.cons.getProduct().subscribe(
      data=>this.listProduct=data


    )
    this.alert=this.cl.stat(this.listProduct,'quantity',0)


  }
increment(id:number){
  this.listProduct[id].like++;
}

buy(id:number){
  this.listProduct[id].quantity--;

}
delete(id:number){
  this.cons.DeleteProduct(id).subscribe(
    ()=>this.ngOnInit()
  )
}
}
