import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  change_pass(username, old_password, new_password){
    const data = {
      username: username,
      old_password: old_password,
      new_password: new_password
    }

    return this.http.post(`${this.uri}/user/change_pass`, data);
  }


  login(username, password, type){
    const data = {
      username: username,
      password: password,
      type: type
    };

    return this.http.post(`${this.uri}/user/login`, data);
  }

  register(username, password, firstname, lastname, country, email, type){
    const data = {
      id: 0,
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      country: country,
      email: email,
      type: type
    };

    return this.http.post(`${this.uri}/user/register`, data);
  }
}
