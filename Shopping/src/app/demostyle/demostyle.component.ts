import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demostyle',
  templateUrl: './demostyle.component.html',
  styleUrls: ['./demostyle.component.css']
})
export class DemostyleComponent{
    public styleobj= {
      'position':'',
      'left':'',
      'top':'',
    };
    
    public mouseTrack(eve){
      this.styleobj={
        'position':'fixed',
        'left':eve.clientX +'px',
        'top':eve.clientY +'px',
    }

  }
}
