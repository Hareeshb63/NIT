import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  public category=[];
  constructor(private data: DataService, private router:Router) { }

  ngOnInit(): void {
    this.category=this.data.Getcategory();
  }
  public catSelect(item){
    this.router.navigate(['products', item.categoryId])
  }

}
