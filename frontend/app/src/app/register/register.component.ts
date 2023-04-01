import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyService } from '../agency.service';
import { Agency } from '../models/agency';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private agencyService: AgencyService,
    private router: Router) {}

    //sve agencije
    all_agencies: Agency[];

  ngOnInit(): void {

    this.flag_show_reg_agency_form = false;
    this.agencyService.getAllAgencies().subscribe((data: Agency[]) =>{
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





  onSubmit(){
    alert('SUCCESS!! :-)\n\n');

  }

  //add_user()
  register() {
    alert('SUCCESS!! :-)\n\n');
  }


}
