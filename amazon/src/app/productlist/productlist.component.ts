import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public catId;
  public products=[];
  constructor(private data:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.catId= this.route.snapshot.paramMap.get('id');
    this.products= this.data.Getproduct().filter(x=>x.categoryId==this.catId);
  }

  public productSelect(item){
    this.router.navigate(['productdetails',item.productId],{relativeTo:this.route});

  }

}
