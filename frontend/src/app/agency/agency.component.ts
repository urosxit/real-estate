import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { LocationService } from '../location.service';
import { Agency } from '../models/agency';
import { Location } from '../models/location';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  name: string;
  location: string;
  address: string;
  phoneNumber: string;
  pib: string;

  locations: Location[];
  agencies: Agency[];

  invalidDataMessage: string;
  successMessage: string;

  constructor(private locationService: LocationService,
    private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.invalidDataMessage = '';
    this.successMessage = '';

    this.locationService.getAllLocations().subscribe((data: Location[]) => {
      this.locations = data;
    });

    this.agencyService.getAllAgencies().subscribe((data: Agency[]) => {
      this.agencies = data;
    });
  }

  addNewAgency() {
    this.invalidDataMessage = '';

    if (typeof this.name == 'undefined' || typeof this.pib == 'undefined') {
      this.invalidDataMessage += 'Morate uneti naziv i PIB agencije! ';
    }

    if (this.agencies.find(a => a.pib === this.pib)) {
      this.invalidDataMessage += 'Agencija sa unetim PIBom već postoji! ';
    }

    if (this.invalidDataMessage === '') {
      this.agencyService.addNewAgency(this.name,
        this.getLocationId(),
        this.getDefaultValue(this.address),
        this.getDefaultValue(this.phoneNumber),
        this.pib)
        .subscribe((data: any) => {
          if (data.ok === 1) {
            this.successMessage = 'Agencija je uspešno dodata!';
          }
          else {
            this.invalidDataMessage = 'Agencija nije dodata, molimo Vas pokušajte kasnije.';
          }

        });
      window.location.href = '/administrator';
    }
  }

  getLocationId() {
    if (typeof this.location == 'undefined') {
      return this.locations[0].id;
    }
    return this.locations.find(l => l.name === this.location).id;
  }

  getDefaultValue(value) {
    if (typeof value == 'undefined') {
      return '';
    }
    else {
      return value;
    }
  }
}
