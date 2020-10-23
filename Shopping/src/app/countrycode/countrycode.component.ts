import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countrycode',
  templateUrl: './countrycode.component.html',
  styleUrls: ['./countrycode.component.css']
})
export class CountrycodeComponent{

public regExp;
public flag;
public tip;
public vfyNum= false;

  public selectCountry(country){
    switch(country){
      case 'India' :
        this.flag= "assets/india.png"
        this.regExp= /\+91[0-9]{10}/;
        this.tip= 'Add +91 with 10 digit Mobile Number';
        break;

        case 'UK' :
          this.flag= "assets/UK.jpg"
        this.regExp=  /\+22[0-9]{8}/;
        this.tip= 'Add +22 with 8 digit Mobile Number';
        break;

        case 'US' :
        this.flag= "assets/US.png"
        this.regExp= /\+36[0-9]{9}/;
        this.tip= 'Add +36 with 9 digit Mobile Number';
        break;

        default :
        break;


    }   

  }
  public numVerify(num){
    if(num.match(this.regExp)){
      this.vfyNum= false;
    }else{
      this.vfyNum=true;
    }
  }
 
}
