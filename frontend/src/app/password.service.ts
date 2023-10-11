import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  arePasswordEqual(password1, password2) {
    return password1 === password2;
  }

  validatePassword(password) {
    return password.match(/(?=.*[A-Z])(^[A-Za-z])(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.:])[A-Za-z\d$@$!%*#?&.:]{7,}$/);
  }
}
