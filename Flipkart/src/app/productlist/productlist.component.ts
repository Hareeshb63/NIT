import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private data: DataService,private router :ActivatedRoute, private route: Router) { }
  public product=[];
  public catId;
  ngOnInit(): void {
    this.catId=this.router.snapshot.paramMap.get('id');
    this.product= this.data.GetProducts().filter(x=>x.categoryId==this.catId);
  }
  public prodDetails(item){
    this.route.navigate(['details',item.productId],{relativeTo:this.router});
  }
}
