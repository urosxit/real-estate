import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  invalidDataMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logIn() {
    this.invalidDataMessage = '';
    this.userService.logIn(this.username, this.password).subscribe((user: User) => {
      if (user) {
        if (user.waitingApproval || user.denied) {
          this.invalidDataMessage += 'Vaš nalog još uvek nije odobren. Molimo Vas da kontaktirate administratora.';
        }
        else {
          if (user.userType === 1) {
            localStorage.setItem('buyer', this.username);
            window.location.href = '/buyer';
          }
          else if (user.userType === 2) {
            localStorage.setItem('advertiser', this.username);
            window.location.href = '/advertiser';
          }
          else {
            localStorage.setItem('administrator', this.username);
            window.location.href = '/administrator';
          }

        }
      }
      else {
        this.invalidDataMessage = 'Uneli ste pogrešne podatke!';
      }
    });
  }
}
