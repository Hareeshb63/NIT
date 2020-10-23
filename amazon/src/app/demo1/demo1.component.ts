import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {

  // public products = ["Poultry","Consomme","Beef","Hen"];
  public styles = [];

  public nav = [
    {product: 'Poultry', style: ''},
    {product: 'Consomme', style: ''},
    {product: 'Beef', style: ''},
    {product: 'Hen', style: ''},
  ];
  public msg = "Poultry";
  public i = 0;

  public onYes(){
    if(this.i < this.nav.length) {
      // this.i++;
      console.log(this.i);
      // this.msg = this.products[this.i];
      this.nav[this.i].style = 'yesClass';
      console.log(this.nav[this.i].style);
    }
  }

  public onNo(){
    if(this.i < this.nav.length) {
      // this.i++;
      console.log(this.i);
      // this.msg = this.products[this.i];
      this.nav[this.i].style = 'noClass';
      console.log(this.nav[this.i].style)
    }
  }

  public btn = 'Cancel';
  public disNext = false;
  public onNext() {
    // if(this.i < this.nav.length) {
      this.disBack = false;
      this.i++;
      console.log(this.i);
      this.msg = this.nav[this.i].product;
      // this.nav[this.i].style = '';
      this.btn = 'Back';
      console.log(this.nav.length - 1);
      if(this.i == this.nav.length - 1) {
        this.disNext = true;
      }
    // }
  };
  public disBack = false;
  public onBack() {
    // if(this.i < this.nav.length) {
      this.i--;
      console.log(this.i);
      this.msg = this.nav[this.i].product;
      // this.nav[this.i].style = '';
      
      if(this.i == 0) {
        this.btn = 'Cancel';
        this.disBack = true;
      }
      if(this.i <= this.nav.length - 1) {
        this.disNext = false;
      }
    // }
  };

}
