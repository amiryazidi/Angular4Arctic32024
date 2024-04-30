import { Component } from '@angular/core';
import { ProductService } from '../sercices/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  id!:number
  product!:Product
  constructor(private ps:ProductService,private consP:ConsumerProductService,private router:Router,private Act:ActivatedRoute) { }
  addForm = new FormGroup({
    id : new FormControl('',Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(3)]),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    like : new FormControl('',Validators.required),

})

ngOnInit(){
  //2- récuperation de l'id depuis l'url
  this.id=this.Act.snapshot.params['id']
  //3- recuperation de produit lui  meme
  this.consP.getProductById(this.id).subscribe(
    data=>{
      this.product=data,
      //4- remplissage du formulaire par les données de produit
       this.addForm.patchValue(this.product as any)
    }
  )

}

save (){
//5-la mise à jour
this.consP.updateProduct(this.addForm.value as any,this.id).subscribe(
  {
    next:()=>this.router.navigateByUrl('/product'),
    error:(error)=>console.log(error),
    complete:()=>console.log('done')
  }
)
}
}

