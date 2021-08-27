import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartStoreService } from 'src/app/service/cart-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  id:any="";
  constructor
    (
    private allProduct:ApiService,
    private cart:CartStoreService
    ) 
    {
    console.log("banda kama kar bala")
    
    allProduct.getProducts(this.id)
    .subscribe((data)=>{
      console.log(data);
      this.products=data;
    })
    // console.log(product)
    // product.getProduct();
   }
   //Adding the click element to the cart
  //  AddToCart(product:any){
  //   this.cart.setToCart(product);
  // }
  
  ngOnInit(): void {
  }

}
