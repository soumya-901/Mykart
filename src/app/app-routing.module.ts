import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyingComponent } from './buying/buying.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './product/products/products.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'mycart',component:CartComponent},
  {path:'eachproduct/:pro',component:ProductDetailsComponent},
  {path:'buy',component:BuyingComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
