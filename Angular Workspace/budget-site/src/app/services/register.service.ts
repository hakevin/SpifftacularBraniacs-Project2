import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private hClient: HttpClient) { }

  register(creds) {

    return this.hClient.post<any>('http://localhost:8080/users/register/', creds);
  }
}
