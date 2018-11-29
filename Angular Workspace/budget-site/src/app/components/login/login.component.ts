import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  username: string;
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    // console.log(credentials);
    // this.loginService.login(credentials)
    //   .subscribe(
    //     (result) => {
    //       console.log(result);
    //       this.user = result.body;

    //       console.log(this.user);
    //       // Navigate to home route
    //       return this.user;
    //     },
    //     (error) => console.log(error)
    //   );
    this.loginService.logger(credentials, this.user);

  }

}
