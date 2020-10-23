import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component{
    public btnName;
    public xPosition='';
    public yPosition='';
public btnClick(eve){
    this.btnName= eve.target.name;
    this.xPosition=eve.clientX;
    this.yPosition=eve.clientY;
}

}
