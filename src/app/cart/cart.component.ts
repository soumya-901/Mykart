import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartStoreService } from '../service/cart-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  productList:any=[]
  constructor(
    private product:CartStoreService,
    private route:Router
    ) {}
    
  TotalPrice:any =this.product.getPrice();

  removeitem(deletedItemId:any){
    console.log(deletedItemId)
    this.product.removeItem(deletedItemId);
    // delete this.productList[0];
    this.TotalPrice =this.product.getPrice();
  }

  increaseItem(itemNo:any){this.TotalPrice =this.product.getPrice();}
  decreaseItem(itemNo:any){this.TotalPrice =this.product.getPrice();}
  
  goForShop(){
    this.route.navigateByUrl('buy')
  }
  ngOnInit(): void{
    this.product.getProduct()
    .subscribe((res)=>{
      this.productList=res;
  })
  }
}


