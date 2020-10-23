import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

 @Input() public uname='';

 public prevValue='';
 public currValue='';

 ngOnchange(changes: SimpleChanges){
   for(var property in changes){
     let change= changes[property];
     this.prevValue=change.previousValue;
     this.currValue=change.currentValue;
   }
 }
}
