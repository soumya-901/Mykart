import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getProducts(id:any){
    console.log(id);
    
    let url = `https://fakestoreapi.com/products/${id}`;
    return this.http.get(url);
  }
}
