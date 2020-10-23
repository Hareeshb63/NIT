import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public term;
  
  public products= [
    {name:'Lg TV', price:29999,category:'electronics'},
    {name:'Mobile', price:14999,category:'electronics'},
    {name:'Shirt', price:3999,category:'fashion'},
    {name:'Nike causals', price:1999,category:'shoes'},
    {name:'Reebok causals', price:29999,category:'shoes'},
];

}
