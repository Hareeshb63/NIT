import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployees } from './IEmployees';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  public apiUrl= "http://127.0.0.1:4000/api/employeeinfo";
  public postUrl="http://127.0.0.1:4000/api/addemployeeinfo"
  // public apiUrl= "https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }

  public getEmployees():Observable<IEmployees[]> {
    return this.http.get<IEmployees[]>(this.apiUrl);
  }

  public addEmployee(data){
    return this.http.post<any>(this.postUrl,data).pipe(catchError(this.CatchError))
  }

  public CatchError(error:HttpErrorResponse){
    return throwError(error.statusText);
  }
}