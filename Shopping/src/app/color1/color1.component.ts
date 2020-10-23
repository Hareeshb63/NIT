import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color1',
  templateUrl: './color1.component.html',
  styleUrls: ['./color1.component.css']
})
export class Color1Component{
   
   public styleObj={
     height:"100px",
     width:"200px"
   }
    
   public colorO;
   public textColor='';
   public colorChange(eve){
    this.colorO=eve.target.id;
    this.textColor = eve.target.id;
      
    }
   }
  


 


