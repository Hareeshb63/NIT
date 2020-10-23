import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-co1filter',
  templateUrl: './co1filter.component.html',
  styleUrls: ['./co1filter.component.css']
})
export class Co1filterComponent{

  public selectedCategoryName='All'

  @Input() public allCount= 0;
  @Input() public electronicsCount= 0;
  @Input() public clothsCount= 0;

  @Output() public filterSelectionChange: EventEmitter<string>= new EventEmitter;
  
  public radioButtonChange(){
    this.filterSelectionChange.emit(this.selectedCategoryName);
  }

}
