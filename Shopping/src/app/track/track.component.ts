import { Component } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent{
  public products=[
    {id:1, name:'tv'},
    {id:2,name:'mobile'},
    {id:3,name:'watch'}
  ];

  public addProduct(){
    this.products=[
      {id:1, name:'tv'},
    {id:2,name:'mobile'},
    {id:3,name:'watch'},
    {id:4,name:'pc'}
    ]
  }
  public trackChange(i){
    return i.id;
  }


}
