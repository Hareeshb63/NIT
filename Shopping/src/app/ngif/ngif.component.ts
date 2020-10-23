import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent{
  public product={
    name:'BPL TV',
    price:33959.33,
    photo:'../assets/indiaflag.jpg',
  }

  public isvisible= true;
  public btntext= 'Hide';

  public displayClick(){
    this.isvisible=(this.isvisible==true)?false:true;
    this.btntext=(this.btntext=='Hide')?'Show':'Hide';
  }
}
