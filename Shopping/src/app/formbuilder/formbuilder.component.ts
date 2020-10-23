import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {

  constructor(private fb: FormBuilder) { }

  public frmRegister= this.fb.group({
    name:['', Validators.required],
    price:[''],

    frmDetails: this.fb.group({
      city:[''],
      isinstock:[''],
    })
  })


}
