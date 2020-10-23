import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private route: ActivatedRoute) { }
  public categoryName= this.route.snapshot.paramMap.get('category');
      public products= [
      {name:'Lg TV', price:29999,category:'electronics'},
      {name:'Mobile', price:14999,category:'electronics'},
      {name:'Shirt', price:3999,category:'fashion'},
      {name:'Nike causals', price:1999,category:'shoes'},
      {name:'Reebok causals', price:29999,category:'shoes'},
];
  filterProduct= this.products.filter(x=>x.category==this.categoryName);
}
