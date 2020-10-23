import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-nestedform',
  templateUrl: './nestedform.component.html',
  styleUrls: ['./nestedform.component.css']
})
export class NestedformComponent {
  public frmRegister=  new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    frmDetails: new FormGroup({
        city: new FormControl(''),
        isinstock: new FormControl(false)
      })
});

public updateClick(){
  this.frmRegister.patchValue({
    name: 'LG TV',

    frmDetails: {
      city: 'Banglore',
      isinstock: true,
    }
  })
}

}
