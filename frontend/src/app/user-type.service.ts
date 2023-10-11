import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getAllDbUserTypes() {
    return this.httpClient.get(`${this.uri}/userTypes/getAllUserTypes`);
  }
}
