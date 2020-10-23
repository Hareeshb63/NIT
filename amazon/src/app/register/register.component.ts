import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public regUserdata = {
    email: '',
    password: ''
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  public regUser() {
    this.auth.registerUser(this.regUserdata).subscribe(
      res => console.log(res),
      err => console.log(err)
    )

  }


}
