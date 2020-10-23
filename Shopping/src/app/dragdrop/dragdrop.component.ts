import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent{
  public objStyle={
    position: '',
    left: '',
    top: ''
  }
    public xPosition;
    public yPosition;
    public xPosNew;
    public yPosNew;
    public onmouseDown(eve){
      this.objStyle={
        position: 'absolute',
        left: eve.clientX,
        top: eve.clientY,
      }
      this.xPosition=eve.clientX;
      this.yPosition=eve.clientY;
    }

    public onmouseUp(eve){
      this.objStyle={
        position: 'fixed',
        left: eve.clientX,
        top: eve.clientY,
      }

      this. xPosNew=eve.clientX;
      this. yPosNew=eve.clientY;

}
}
