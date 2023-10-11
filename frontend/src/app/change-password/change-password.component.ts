import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { PasswordService } from '../password.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  username: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
  databasePassword: string;

  invalidDataMessage: string;
  validDataMessage: string;

  constructor(private userService: UserService,
    private passwordService: PasswordService,
    private router: Router) { }

  ngOnInit(): void {
    this.validDataMessage = '';
    let buyer = localStorage.getItem('buyer');
    let advertiser = localStorage.getItem('advertiser');
    let administartor = localStorage.getItem('administartor');
    if (buyer !== null) {
      this.username = buyer;
    }
    else if (advertiser !== null) {
      this.username = advertiser;
    }
    else if (administartor !== null) {
      this.username = administartor;
    }

    this.userService.getUser(this.username).subscribe((data: User) => {
      if (data) {
        this.databasePassword = data.password;
      }
    });
  }

  resetPassword() {
    this.invalidDataMessage = '';

    if (typeof this.username == 'undefined' || this.username === '' ||
      typeof this.oldPassword == 'undefined' || this.oldPassword === '' ||
      typeof this.newPassword == 'undefined' || this.newPassword === '' ||
      typeof this.newPasswordConfirmation == 'undefined' || this.newPasswordConfirmation === '') {
      this.invalidDataMessage += 'Morate uneti sva polja za resetovanje lozinke. ';
    }
    else {
      if (this.databasePassword !== this.oldPassword) {
        this.invalidDataMessage += 'Uneli ste neispravnu staru lozinku. ';
      }

      if (this.oldPassword === this.newPassword) {
        this.invalidDataMessage += 'Stara i nova lozinka ne smeju biti iste. ';
      }

      if (!this.passwordService.arePasswordEqual(this.newPassword, this.newPasswordConfirmation)) {
        this.invalidDataMessage += '"Nova lozinka" i "Potvrda nove lozinke" moraju imati istu vrednost. ';
      }

      if (this.passwordService.validatePassword(this.newPassword) === null) {
        this.invalidDataMessage = 'Lozinka mora sadržati 8 karaktera, od čega bar jedno veliko slovo, jedan broj i jedan specijalan karakter, i mora počinjati slovom. ';
      }

      if (this.invalidDataMessage === '') {
        this.userService.resetPassword(this.username, this.newPassword).subscribe(data => {
          if (data) {
            alert('Usesno ste promenili svoju lozinku.');
            localStorage.removeItem('buyer');
            localStorage.removeItem('advertiser');
            localStorage.removeItem('administartor');
            window.location.href = '';
          }
        });
      }
    }
  }
}
