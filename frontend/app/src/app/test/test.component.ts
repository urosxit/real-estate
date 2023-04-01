import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { LocationService } from '../location.service';
import { Agency } from '../models/agency';
import { Municipality } from '../models/municipality';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private agencyService: AgencyService
    ) {}

  ngOnInit(): void {
    //dohvati sve agencije
    this.agencyService.getAllAgencies().subscribe((data: Agency[]) =>{
      this.all_agencies = data;
    });

    //dohvati sve gradove i opstine
    this.locationService.getAllMunicipalities().subscribe((data: Municipality[]) =>
    {
      this.all_municipalities = data;
    });

  }

reg_user_type: String;
reg_user_agent_or_not: String;
reg_user_agency: String;
reg_user_licence: String;

//sve agencije s backa
all_agencies: Agency[];

//odabrana agencija
picked_agency: Agency;

//sve opstine
all_municipalities: Municipality[];

//dodavanje mikrolokacije i ulice
picked_cityandmunicipality: Municipality;
my_city: String;
my_municipality: String;
my_microlocation: String;
my_street: String;
my_location_combo: String;
add_location_message: String;


add_location(){

  //izbuci grad i opstinu
  this.my_city = this.picked_cityandmunicipality.city;
  this.my_municipality = this.picked_cityandmunicipality.name;

     //pozovi metodu iz servisa i vrati poruku
  this.locationService.add_location(
    this.my_city,
    this.my_municipality,
    this.my_microlocation,
    this.my_street

    ).subscribe((message: String) =>
    {
      if(message)
      {
        this.add_location_message = message;
      }
    });


}

registracija_test(){
  this.reg_user_agency = JSON.stringify(this.picked_agency);
}



  registruj() {
    alert('uwu');
  }
}
