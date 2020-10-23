import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
 public category=['All','Electronics','Cloths'];
 public electronics=['Tv','Mobile','Watch'];
 public cloths=['PE','Netplay'];

 public data= [
   {name:'Tv',price:34101,photo:'assets/tv.png'},
   {name:'Mobile',price:1211,photo:'assets/mobile.jpg'},
   {name:'Watch',price:2011,photo:'assets/watch.jpeg'},
   {name:'PE',price:1999,photo:'assets/peshirt'},
   {name:'Netplay',price:799,photo:'assets/tshirt.jpg'},
  ];

public product=[];
public selectedCatrgory;
public selectedProduct;
public searchedProduct=[];


public selectedCategoryChange(){
  switch(this.selectedCatrgory){
    case 'Electronics':
      this.product=this.electronics;
      break;

      case 'Cloths' :
        this.product=this.cloths;
        break;

        default:
          this.product=this.electronics.concat(this.cloths);
          break;
  };
}
    public name= '';
    public price= 0;
    public photo= '';
    public cartItems=[];
    public total= 0;

    public cartItem={
      name:'',
      price:0,
      photo:'',

    }
    
   
    public selectedProductChange(){
    this.searchedProduct= this.data.filter(x=>x.name== this.selectedProduct);
    this.name=this.searchedProduct[0].name;
    this.price=this.searchedProduct[0].price;
    this.photo=this.searchedProduct[0].photo;
    
  }

  public AddToCardClick(){
    this.cartItem={
      name:this.name,
      price:this.price,
      photo:this.photo

  };
  this.cartItems.push(this.cartItem);
  this.total+=this.price;
  
}

public deleteClick(index){
  this.cartItems.splice(index,1);
  this.total-=this.price;
  
}
public add=0;
public amount;

public click=false;
public cartClick(){
  this.click= !this.click;
  }
}
