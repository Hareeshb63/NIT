import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public GetCategories(){
    return[
      {categoryId:1,categoryName:'Electronics'},
      {categoryId:2,categoryName:'Shoes'}
    ];
  }

  public GetProducts(){
    return [
      {productId:1,name:'Lg TV',price: 43778.12,categoryId:1,photo:''},
      {productId:2,name:'Watch',price: 3999.87,categoryId:1,photo:''},
      {productId:3,name:'adidas',price: 7778.12,categoryId:2,photo:''},
      {productId:4,name:'woodland',price: 9228.92,categoryId:2,photo:''},
    ];
  }
}
