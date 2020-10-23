import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent {
  public product= ['dell','lenovo','hp','mac'];

  public data= [
    {name: 'Dell', price: 45242, photo:'/assets/dell.jpg', alt:'dell'},
    {name: 'Lenovo', price: 32322, photo:'assets/lenovo.jpg', alt:'lenovo'},
    {name: 'hp', price: 44142, photo:'assets/hp.jpg', alt: 'hp'},
  
  ]
}