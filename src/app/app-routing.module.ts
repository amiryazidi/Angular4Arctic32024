import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  // path par defaut
  {path : '' , redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'product' ,  component : ProductComponent},

// route parametré 
  {path : 'detail/:id', component: DetailProductComponent},
  // route Not found
  {path : '**' , component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
