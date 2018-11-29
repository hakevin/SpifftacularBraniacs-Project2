import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reg: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  submit(username, password, firstName, lastName, email) {
    const creds = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email
    };

  this.reg.register(creds).subscribe(x => { });
  }

  pageChange() {
    this.router.navigate(['/', 'users']);
  }

}
