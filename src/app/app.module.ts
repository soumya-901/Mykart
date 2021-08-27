import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './product/products/products.component';
import { EachproductComponent } from './product/eachproduct/eachproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentComponent } from './component/component.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BuyingComponent } from './buying/buying.component';
import { SelectItemComponent } from './select-item/select-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    EachproductComponent,
    ComponentComponent,
    CartComponent,
    ProductDetailsComponent,
    BuyingComponent,
    SelectItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
