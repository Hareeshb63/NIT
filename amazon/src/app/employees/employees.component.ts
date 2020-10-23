import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees=[];
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.auth.infoEmp().subscribe(
      res=> this.employees= res,
      err=> {
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this.router.navigate(['/login'])
          }
        }
      }
    )
  }

}
