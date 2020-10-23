import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-builderarray',
  templateUrl: './builderarray.component.html',
  styleUrls: ['./builderarray.component.css']
})
export class BuilderarrayComponent {

  constructor(private fb: FormBuilder) { }

  public frmRegister = this.fb.group({
    Name: [],
    newControls: this.fb.array([
      this.fb.control('')
    ])
  });

  get newControls() {
    return this.frmRegister.get('newControls') as FormArray;
  }
  public fileActive= false;
  public addMore() {
    this.newControls.push(this.fb.control(''));
    this. fileActive= true;
  }


  public removeFile(i){
    this.newControls.removeAt(i);
  }

}


