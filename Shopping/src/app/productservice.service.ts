import { Injectable } from '@angular/core';

@Injectable()
export class ProductserviceService {

  public getProduct(){
      return [
        {name:'Dell',model:'v145D42',price:4499},
      {name:'hp',model:'h42',price:39999},
      {name:'Lenovo',model:'l4345',price:34998},
      ];

  }
}
