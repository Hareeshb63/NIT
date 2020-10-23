import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-com1filter',
  templateUrl: './com1filter.component.html',
  styleUrls: ['./com1filter.component.css']
})
export class Com1filterComponent{

  public selectedType='All';

 @Input() public allCount=0;
 @Input() public electronicsCount=0;
 @Input() public clothsCount=0;

 @Output() public filterEvent: EventEmitter<string>= new EventEmitter<string>();


 public onRadioChange(){
   this.filterEvent.emit(this.selectedType);
 }


}
