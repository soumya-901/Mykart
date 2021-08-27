import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor( private route:Router

  ) { }
    goForShop(){
      this.route.navigateByUrl("buy")
    }
  ngOnInit(): void {
  }

}
