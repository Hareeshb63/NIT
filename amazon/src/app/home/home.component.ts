import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private http: HttpClient) { }
  loginUrl="http://localhost:4000/api/login";
  ngOnInit(): void {
  }

  public test(){
    this.http.get<any>(this.loginUrl)
    .subscribe(res=>{
      console.log(res.headers.get('location'));
    })
  }

}
