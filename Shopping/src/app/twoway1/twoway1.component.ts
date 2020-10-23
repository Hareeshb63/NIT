import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway1',
  templateUrl: './twoway1.component.html',
  styleUrls: ['./twoway1.component.css']
})
export class Twoway1Component{
  public name= '';
  public price= 0;
  public city= '';
  public isinStock= true;
  public mfd= '';
}
