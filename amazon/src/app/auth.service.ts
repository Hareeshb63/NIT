import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  regUrl= "http://localhost:4000/api/register";
  loginUrl="http://localhost:4000/api/login";
  employeeUrl="http://localhost:4000/api/employees"
  constructor(private http:HttpClient, private router:Router) { }

  registerUser(eve){
   return this.http.post<any>(this.regUrl,eve)
  }
  loginUser(eve){
    return this.http.post<any>(this.loginUrl,eve)
  }

  infoEmp(){
    return this.http.get<any>(this.employeeUrl)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }
}
