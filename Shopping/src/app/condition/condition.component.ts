import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent{
  public products=[
    {id:1,name:'Tv', category:'Electronics'},
    {id:2,name:'Mobile', category:'Electronics'},
    {id:3,name:'PE', category:'Cloths'},
    {id:4,name:'Spikers', category:'Cloths'}

  ]
   
  public filterText='All';
}
