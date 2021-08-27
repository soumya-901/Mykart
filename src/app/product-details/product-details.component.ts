import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { CartStoreService } from '../service/cart-store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  EachProduct:any;
  id:any=0;
  btnDisble:boolean=false;
  constructor(
    private contentRout:ActivatedRoute,
    private apiService:ApiService,
    private cart:CartStoreService,
    private route:Router
    ) { 
  }
  ngOnInit(): void {
    this.contentRout.params.subscribe((res)=>{
      this.id= res.pro;
      
    })   
   this.EachProduct= this.apiService.getProducts(this.id)
   .subscribe((data)=>{
    this.EachProduct=data; 
  })
   
  }
  addToCart(product:any){
    this.cart.setToCart(product);
    console.log('kama karuchi')
    this.btnDisble=true;
  }
  buyProduct(product:any){
    this.cart.setToCart(product)
    this.route.navigateByUrl('buy')
  }
}
