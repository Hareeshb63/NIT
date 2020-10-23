import { Component } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent {
  public Product= {
    name: 'Samsumg Tv',
    price: '45000',
    photo: '../assets/indiaflag.jpg',
  };
  public isVisible= true;
  public btnText= 'Hide';
  public displayClick() {
    this.isVisible=(this.isVisible== true)?false:true;
    this.btnText=(this.btnText=='Hide')?'Show':'Hide'
  }
}
