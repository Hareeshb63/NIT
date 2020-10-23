import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  public prodDetails= [];
  public prodId;
  
  constructor(private data:DataService, private router: ActivatedRoute) { }

  ngOnInit(): void {
     this.router.paramMap.subscribe((x: ParamMap)=>{
      this.prodId= x.get('id');
      this.prodDetails=this.data.Getproduct().filter(x=>x.productId==this.prodId);
    })
    
  }

}
