import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth:AuthService) { }

  intercept(req,next){
    let token= this.auth.getToken()
    let tokenizedReq= req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
