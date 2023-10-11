import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  isUserLoggedIn: boolean = false;
  myProfile: string;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('buyer')) {
      this.myProfile = '/buyer';
      this.isUserLoggedIn = true;
    }
    if (localStorage.getItem('advertiser')) {
      this.myProfile = '/advertiser';
      this.isUserLoggedIn = true;
    }
    if (localStorage.getItem('administrator')) {
      this.myProfile = '/administrator';
      this.isUserLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('buyer');
    localStorage.removeItem('advertiser');
    localStorage.removeItem('administrator');
    window.location.href = '/';
  }
}
