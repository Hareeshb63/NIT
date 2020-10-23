import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productgetbyserv',
  templateUrl: './productgetbyserv.component.html',
  styleUrls: ['./productgetbyserv.component.css']
})
export class ProductgetbyservComponent{
  product =[];
  constructor(private data: ProductserviceService) {
    this.product= data.getProduct();
   }
}
