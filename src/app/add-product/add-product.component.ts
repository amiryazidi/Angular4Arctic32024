import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../sercices/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private ps:ProductService) { }
  addForm = new FormGroup({
    id : new FormControl('',Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(3)]),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    like : new FormControl('',Validators.required),

})

save (){
  this.ps.addProduct(this.addForm.value as any)
}
}
