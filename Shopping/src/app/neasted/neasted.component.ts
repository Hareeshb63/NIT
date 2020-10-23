import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neasted',
  templateUrl: './neasted.component.html',
  styleUrls: ['./neasted.component.css']
})
export class NeastedComponent{
    public menu= [
      {category:'Nike',products:['Shoes','shirts','Shorts']},
      {category:'Electronics', products:['Mobile','TV','watches']}
    ];
}
