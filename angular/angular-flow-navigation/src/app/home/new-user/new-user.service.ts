import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  createAccount(newUser: NewUser) {
    return this.http.post(`${environment.apiURL}/user/signup`, newUser);
  }

  verifyUserExist(userName: string) {
    return this.http.get(`${environment.apiURL}/user/exists/${userName}`);
  }
}
