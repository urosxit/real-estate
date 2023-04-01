import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AgencyService } from '../agency.service';
import { Agency } from '../models/agency';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private adminService: AdminService,
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

  //Agencija: polja sa forme
  reg_agency_name: String;
  reg_agency_address: String;
  reg_agency_city: String;
  reg_agency_phone_number: String;
  reg_agency_PIB: Number;
  reg_agency_message: String;

  //metoda za dodavanje nove agencije
  register_agency() {
    this.agencyService.register_agency(
      this.reg_agency_name,
      this.reg_agency_address,
      this.reg_agency_city,
      this.reg_agency_phone_number,
      this.reg_agency_PIB
    ).subscribe((message: String) =>
    {
      if(message)
      {
        this.reg_agency_message = message;
      }

    });
  }

  flag_show_reg_agency_form: Boolean;


  //Mikrolokacije: polja sa forme
  add_microlocation: String;
  add_microlocation_street: String;


  //test find
  test_ime: String;
  test_grad:  String;
  test_pib: String;

  test_find(){
    this.adminService.test_find(
      this.test_ime,
      this.test_grad,
      this.test_pib
    ).subscribe((message: String) =>
    {
      if(message)
      {
        this.reg_agency_message = message;
      }

    });




  }
}
