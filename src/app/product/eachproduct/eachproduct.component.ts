// import { Route } from '@angular/compiler/src/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartStoreService } from 'src/app/service/cart-store.service';
// import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-eachproduct',
  templateUrl: './eachproduct.component.html',
  styleUrls: ['./eachproduct.component.css']
})
export class EachproductComponent implements OnInit {
  @Input() product: any;
  btnStyle: any = "button-style";
  btnName: any = "Add to cart";
  constructor(private route:Router) {
  }
  ngOnInit(): void {
  }
  // @Output() addtocart = new EventEmitter();  "Transfor data from eachproduct to products component"
  // addToCart(product: any) {
  //   // this.btnStyle = "button-style afterClick"
  //   this.btnName = "Goto cart"
  //   // console.log(product);
  //   // this.route.navigateByUrl('/mycart');
  //   this.btnStyle="button-style-afclick"
  //   this.addtocart.emit(product)
  // }
  productDetail(product:any){
    // console.log ( product.id);
    // var bala=JSON.stringify(product);
    var bala= product.id;
    console.log(bala)
    this.route.navigateByUrl(`eachproduct/${bala}`);

  }
}
