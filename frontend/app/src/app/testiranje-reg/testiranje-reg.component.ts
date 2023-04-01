import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyService } from '../agency.service';
import { Agency } from '../models/agency';

@Component({
  selector: 'app-testiranje-reg',
  templateUrl: './testiranje-reg.component.html',
  styleUrls: ['./testiranje-reg.component.css'],
})
export class TestiranjeRegComponent implements OnInit {
  constructor(private agencyService: AgencyService, private router: Router) {}

  //sve agencije
  all_agencies: Agency[];

  ngOnInit(): void {

    this.agencyService.getAllAgencies().subscribe((data: Agency[]) => {
      this.all_agencies = data;
    });
  }

  flag_show_reg_agency_form: Boolean;

  //dodavanje novog korisnika
  reg_user_firstname: String;

  reg_user_lastname: String;

  reg_user_username: String;

  reg_user_password: String;
  reg_user_password_repeat: String;

  reg_user_city: String;
  reg_user_birthday: String;
  reg_user_telephone: String;

  reg_user_email: String;

  reg_user_type: String;

  //agent

  reg_user_agent_or_not: String;

  reg_user_agency: String;
  reg_user_licence: String;

  reg_user_message: String;

  //invalid

  firstname_invalid: Boolean;
  username_invalid: Boolean;
  lastname_invalid: Boolean;
  password_invalid: Boolean;
  password_repeat_invalid: Boolean;
  telephone_invalid: Boolean;
  city_invalid: Boolean;
  birthday_invalid: Boolean;

  email_invalid: Boolean;

  type_invalid: Boolean;

  agent_or_not_invalid: Boolean;

  agency_invalid: Boolean;

  licence_invalid: Boolean;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n');
  }

  //add_user()
  register() {
    this.provera();
    alert('SUCCESS!! :-)\n\n');
  }

  provera(){
    if(this.reg_user_firstname === undefined ||
      this.reg_user_firstname == "" ||
      this.reg_user_firstname === null){
      this.firstname_invalid = true;
    } else {
      this.firstname_invalid = false;
    }

    if(this.reg_user_firstname != undefined){
      this.firstname_invalid = false;
    }

    if(this.reg_user_lastname === undefined){
      this.lastname_invalid = true;
    }

    if(this.reg_user_username === undefined){
      this.username_invalid = true;
    }

    if(this.reg_user_password === undefined){
      this.password_invalid = true;
    }

    if(this.reg_user_password_repeat === undefined){
      this.password_repeat_invalid = true;
    }





    this. password_invalid= false;
    this.  password_repeat_invalid= false;
    this.city_invalid= false;
    this. birthday_invalid= false;
    this.telephone_invalid = false;

    this. email_invalid= false;

    this.type_invalid= false;

    this.agent_or_not_invalid= false;

    this. agency_invalid= false;

    this. licence_invalid= false;


}
}
