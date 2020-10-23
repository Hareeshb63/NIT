import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customevalidation',
  templateUrl: './customevalidation.component.html',
  styleUrls: ['./customevalidation.component.css']
})
export class CustomevalidationComponent{

  public errorEmail= false;
  public errorCity= false;
  public errorEven= false;
  public verifyEmail(email){
    let atPos= email.indexOf('@');
    let dotPos= email.lastIndexOf('.');
    if(atPos>=2 && (dotPos-atPos)>=1){
      this.errorEmail= false;
    } else{
      this.errorEmail= true;
    }
  }

  public verifyCity(city){
      if(city== 'nocity'){
        this.errorCity= true;
      }else{
        this.errorCity= false;
      }
  }

  public verifyEven(num){
    if(num % 2==0){
      this.errorEven= false;
    }else{
      this.errorEven= true;
    }
  }

}
