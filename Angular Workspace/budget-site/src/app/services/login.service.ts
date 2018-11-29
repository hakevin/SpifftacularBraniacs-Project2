import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  user;
  // login(credentials: any) {
  //   const url = `${environment.server}/Login`;


  //   return this.httpClient.post(url, credentials, {
  //     observe: 'response'
  //   });
  // }
  constructor(private httpClient: HttpClient, private router: Router) { }

  logger(credentials: any, user?: any) {
    const url = `${environment.server}/users/login`;
    this.httpClient.post(url, credentials)
      .subscribe((payload) => {
        console.log(payload);
        this.user = payload;
        console.log(this.user);

        if (this.user.id > 0) {
          this.router.navigateByUrl('/userHome');
        } else {
          console.log('please try again');
        }

        return this.user;
      },
        (error) => console.log(error)
      );
  }
}
