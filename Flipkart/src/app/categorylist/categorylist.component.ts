import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }
  public categories=[];
  ngOnInit(): void {
    this.categories= this.data.GetCategories();
  }

  public catClick(itm){
    this.router.navigate(['/categories', itm.categoryId]);
  }

}
