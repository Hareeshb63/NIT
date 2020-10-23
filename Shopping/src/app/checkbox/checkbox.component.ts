import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent{
  public products=[
    {id:1, name:'Tv',category:'Electronics'},
    {id:2, name:'Mobile',category:'Electronics'},
    {id:3, name:'Watch',category:'Electronics'},
    {id:4, name:'Nike',category:'Shoes'},
    {id:5, name:'Puma',category:'Shoes'},
    {id:6, name:'RoadStar',category:'Cloths'},
    {id:7, name:'Raymonds',category:'Cloths'}

  ]
  public filterText;
  public filterTextE;
  public filterTextS;
  public filterTextC;

  public f1() {
    if(this.filterText==true){
      this.filterTextE=true;
      this.filterTextS=true;
      this.filterTextC=true;
    }
    if(this.filterTextE==true){
      this.filterTextE='Electronics';
    }
    if(this.filterTextS==true){
      this.filterTextS='Shoes';
    }
    if(this.filterTextC==true){
      this.filterTextC='Cloths';
    }
  };
}