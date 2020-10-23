import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  public productdetails=[];
  public detailId;
  constructor(private data: DataService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailId=this.router.snapshot.paramMap.get('id')
    this.productdetails=this.data.GetProducts().filter(x=>x.productId==this.detailId)
  }

}
