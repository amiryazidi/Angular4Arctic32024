import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../sercices/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private ps:ProductService,private consP:ConsumerProductService,private router:Router) { }
  addForm = new FormGroup({
    id : new FormControl('',Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(3)]),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    like : new FormControl('',Validators.required),

})

save (){
  //this.ps.addProduct(this.addForm.value as any)
  this.consP.AddProduct(this.addForm.value as any).subscribe(
    {
      next:()=>this.router.navigateByUrl('/product'),
      error:(error)=>console.log(error),
      complete:()=>console.log('done')
    }
  )
}
}
