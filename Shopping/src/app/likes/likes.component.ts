import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent{
  public cars=[
    {name:'Benz',photo:'../assets/benz.jpg', likes:0,dislikes:0},
    {name:'Audi',photo:'../assets/audi.jpg', likes:0,dislikes:0}
  ];
  public likeClick(x){
    x.likes++;
    
  }
  public dislikeClick(x){
    x.dislikes++;
    
  }

}
