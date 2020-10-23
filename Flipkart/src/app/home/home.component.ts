import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  public myform = new FormGroup({
    txt : new FormControl('Kishor')
  })

  public mystyle = {
    height : '200px',
  }

  public config = {
    toolbar : [
      ['bold', 'italic', 'underline', 'strike'],
      ['code-block', 'blockquote'],
      [{ 'header': 1 }, { 'header': 2 }]
    ]
  }
  
  public txt = 'kishor';
  public textChanged(t) {
    console.log(t);
    this.txt = t.html;
  }
}
