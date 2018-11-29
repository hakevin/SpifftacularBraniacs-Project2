import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  user;


  constructor(private httpClient: HttpClient, private route: Router) {
   
  }
  queryUser(user, pass) {
  const body = {
      'username': user,
      'password': pass 
     };
    const url = `http://localhost:8080/users/login`;
    this.httpClient.post(url, body, {withCredentials: true}).subscribe( (payload) => {
      if (payload === null) {
        this.route.navigateByUrl('/manager');
      } else {
       this.route.navigateByUrl('/employee');
    }
    
    this.user = payload;
    
    return this.user;
    });

    }
}
