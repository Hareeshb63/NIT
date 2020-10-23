import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keydemo',
  templateUrl: './keydemo.component.html',
  styleUrls: ['./keydemo.component.css']
})
export class KeydemoComponent{
  public userDetails=[
    {userName:'raju', userPassword:'raj1234'},
    {userName:'ravi', userPassword:'ravi321'}
  ];
  
  public name;
  public password;
  public errorName;
  public errorPwd;
  public regExp= /(?=.*[A-Z]{4})\w{4,12}/;
  public errorClass;
  public isTermsChecked=false;
  public charCode;
  public capsOn= false;
  public capsDisplay;
  

  public verifyUser(){
    for(var details of this.userDetails){
      if(details.userName==this.name){
          this.errorName= `<font color= 'red'>Name is already exist plz try another</font>`
          break;
      }else{
        this.errorName= `<font color='green'>Available </font>`
      }
      
    }
  }
   public verifyPassword(){
     if(this.password.match(this.regExp)){
        this.errorPwd='Password is Strong'
        this.errorClass='strong'
     }else if(this.password.length<4){
     this.errorPwd='Password is week';
      this.errorClass='weak'
     }else{
       this.errorPwd='Password is Poor';
       this.errorClass='poor'
     }
    }

    public clearMsg(){
      this.errorName= '';
      this.errorPwd= '';
    }

    public capsKey(eve){
      if(eve.charCode>=65 && eve.charCode<=90) {
        this.capsOn= true;
        this.capsDisplay=' CAPS ON'
      }else{
        this.capsDisplay='';
        this.capsOn= false;
      }
    }
    
 
  }
