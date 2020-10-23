import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  public Getcategory() {
    return [
      {categoryId:1, categoryName:'Electronics'},
      {categoryId:2, categoryName:'Fashion'}
    ]
  }
  public Getproduct(){
    return [
      {productId:1, name:'laptop',price:43000.78,categoryId:1,photo:''},
      {productId:2, name:'Mobile',price:12000.28,categoryId:1,photo:''},
      {productId:3, name:'Peter England',price:7000,categoryId:2,photo:''},
      {productId:4, name:'Roadster',price:4000.8,categoryId:2,photo:''},
    ]
  }
  
}
