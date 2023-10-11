import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  logIn(username, password) {
    const data = {
      username: username,
      password: password
    };
    return this.httpClient.post(`${this.uri}/users/login`, data);
  }

  resetPassword(username, password) {
    const data = {
      username: username,
      password: password
    };
    return this.httpClient.post(`${this.uri}/users/resetPassword`, data);
  }

  getUser(username) {
    const data = {
      username: username
    };
    return this.httpClient.post(`${this.uri}/users/getUser`, data);
  }

  getUserByUsername(username) {
    const data = {
      username: username
    };
    return this.httpClient.post(`${this.uri}/users/getUserByUsername`, data);
  }

  canRegisterUser(username, email) {
    const data = {
      username: username,
      email: email
    };

    return this.httpClient.post(`${this.uri}/users/canRegisterUser`, data);
  }

  register(firstName, lastName, username, password, city, birthDate,
    phoneNumber, email, agency, licenseNo, userType, profileImage) {
    const data = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      city: city,
      birthDate: birthDate,
      phoneNumber: phoneNumber,
      email: email,
      agency: agency,
      licenseNo: licenseNo,
      userType: userType,
      profileImage: profileImage
    };
    return this.httpClient.post(`${this.uri}/users/register`, data);
  }

  getAllUsers() {
    return this.httpClient.get(`${this.uri}/users/getAllUsers`);
  }

  getUseresWaitingForApproval() {
    return this.httpClient.get(`${this.uri}/users/getUsersWaitingForApproval`);
  }

  approveUser(username) {
    const data = {
      username: username
    };
    return this.httpClient.post(`${this.uri}/users/approveUser`, data);
  }

  rejectUser(username) {
    const data = {
      username: username
    };
    return this.httpClient.post(`${this.uri}/users/rejectUser`, data);
  }

  deleteUser(username) {
    const data = {
      username: username
    };
    return this.httpClient.post(`${this.uri}/users/deleteUser`, data);
  }

  editUser(username) {
    const data = {
      username: username
    };
    return this.httpClient.post(`${this.uri}/users/editUser`, data);
  }
}
