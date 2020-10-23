import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouseover',
  templateUrl: './mouseover.component.html',
  styleUrls: ['./mouseover.component.css']
})
export class MouseoverComponent{
 public photos=['assets/burger.jpg','assets/roller.jpg','assets/hotwing.jpg','assets/krusher.png']

 public onMouseOver(eve){
    eve.target.stop();
 }

 public onMouseOut(eve){
  eve.target.start();
}

}
