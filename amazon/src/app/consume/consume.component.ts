import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.css']
})
export class ConsumeComponent implements OnInit {
  public employees= [];
  constructor(private data: ApidataService) { }

  ngOnInit(): void {
    this.data.getEmployees().subscribe(data => this.employees = data);
  }

  public saveData(data){
    this.data.addEmployee(data).subscribe(error=> console.log('something went wrong unable to insert data'));
    alert('Record Inserted')
    console.log(data);
    // location.reload();
  }
}
