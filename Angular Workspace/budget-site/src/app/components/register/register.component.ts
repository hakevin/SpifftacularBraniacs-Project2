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

  submit(firstName, lastName, username, email, password) {
    const creds = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password

    };
    this.reg.register(creds).subscribe((payload) => {
      console.log(payload);

    });
  }
}
