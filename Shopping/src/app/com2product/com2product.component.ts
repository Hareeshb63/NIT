import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com2product',
  templateUrl: './com2product.component.html',
  styleUrls: ['./com2product.component.css']
})
export class Com2productComponent{

    public data= [
      {name:"Tv",price:23325,category:'Electronics'},
      {name:"Mobile",price:1399,category:'Electronics'},
      {name:"PE",price:6600,category:'Cloths'},
      {name:"Roadster",price:2199,category:'Cloths'},
      {name:"Nike Shoe",price:8999,category:'Shoes'},
      {name:"Puma Shoe",price:5099,category:'Shoes'},
      {name:"Digital Watch",price:1099,category:'Electronics'},
    ];

    public selectCat="All"

    public pAll= this.data.length;
    public pElectronics= this.data.filter(x=>x.category=='Electronics').length;
    public pCloths= this.data.filter(x=>x.category=='Cloths').length;
    public pShoes= this.data.filter(x=>x.category=='Shoes').length;
   
    
    public bind(eve){
      this.selectCat= eve;
    }

      // Sorting

   public byPrice(){
    this.data.sort(function(a,b){
        return a.price - b.price;
    });
   }
    
    public byName(){
      this.data.sort(function(a,b){
        if(a.name < b.name){
          return -1;
        }
  
        if(a.name > b.name){
          return 1;
        }
      })
    }
    public searchedText='';
    
    public searchText(){
      this.data.filter(function(x){
          return x== this.searchedText;
      }) 
      alert(this.searchText)
    }
    
}
  



