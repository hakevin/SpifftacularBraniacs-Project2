import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;
  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {
  }
  submit() {
    this.login.queryUser(this.user, this.pass);
    this.user = '';
    this.pass = '';
  }
}
