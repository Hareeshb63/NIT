import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co1productsdata',
  templateUrl: './co1productsdata.component.html',
  styleUrls: ['./co1productsdata.component.css']
})
export class Co1productsdataComponent {

    public products= [
      {name:'Tv', price:35000, category:'Electronics'},
      {name:'Mobile', price:12000, category:'Electronics'},
      {name:'PE', price:1599, category:'Cloths'},
      {name:'Spiker', price:900, category:'Cloths'},
      {name:'Laptop', price:45999, category:'Electronics'},
];
 public selectedCategory='All'

 public pAllCount= this.products.length;
 public pElectronicsCount= this.products.filter(x=>x.category=="Electronics").length;
 public pClothsCount= this.products.filter(x=>x.category=='Cloths').length;

 public filterName(eve){
  this.selectedCategory= eve;
 }

}
