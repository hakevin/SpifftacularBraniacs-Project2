import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';

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
  constructor(private httpClient: HttpClient, private router: Router, private userDataService: UserDataService) { }

  logger(credentials: any, user?: any) {
    const url = `${environment.server}/users/login`;
    this.httpClient.post(url, credentials)
      .subscribe((payload) => {
        // console.log(payload);
        this.user = payload;
        // console.log(this.user);
        this.userDataService.setData(payload);
        this.router.navigateByUrl('/dashboard');
        // if (this.user.id > 0) {

        // } else {
        //   console.log('please try again');
        // }

        return this.user;
      },
        (error) => console.log(error)
      );
  }
}
