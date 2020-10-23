import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-forindex',
  templateUrl: './ng-forindex.component.html',
  styleUrls: ['./ng-forindex.component.css']
})
export class NgForindexComponent{

public product=[
  {name:'Mobile', price:12000},
  {name:'tv', price:29999}
];

public txtname= '';
public txtprice= 0;

public newProduct={
  name:'',
  price:0,
};
public addProduct(){
  this.newProduct= {
    name:this.txtname,
    price:this.txtprice

  }
  this.product.push(this.newProduct)
  alert('Record Added')
  this.txtname;
  this.txtprice;

  }
  public deleteProduct(index){
    let c= confirm('Are you sure want to Delete it?!!')
    if(c==true){
      this.product.splice(index,1);
      alert('Record is deleted');
    }
  }

}