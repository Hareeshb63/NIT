import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-com2filter',
  templateUrl: './com2filter.component.html',
  styleUrls: ['./com2filter.component.css']
})
export class Com2filterComponent{

  @Input() public allCount=0;
  @Input() public electronicsCount=0;
  @Input() public clothsCount=0;
  @Input() public shoesCount=0;

  public selectProduct='All'

  @Output() public filterEvent: EventEmitter<string>= new EventEmitter<string>();
  @Output() public sortEvent: EventEmitter<string>= new EventEmitter<string>()

 public Onchange(){
   this.filterEvent.emit(this.selectProduct);
 }

 public sortType;
 public onSort(){
   this.sortEvent.emit(this.sortType);
 }
 
  }
