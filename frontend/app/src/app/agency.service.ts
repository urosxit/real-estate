import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) {}

  uri = 'http://localhost:4000';

   //dohvati sve agencije
   getAllAgencies(){

    const data = {
      //empty
    }

    return this.http.post(`${this.uri}/agency/getAllAgencies`, data);
  }

  //dodaj novu agenciju
  register_agency(
    reg_agency_name,
    reg_agency_address,
    reg_agency_phone_number,
    reg_agency_city,
    reg_agency_PIB
  ) {
    const data = {
      name: reg_agency_name,
      address: reg_agency_address,
      city: reg_agency_city,
      telephone: reg_agency_phone_number,
      pib: reg_agency_PIB,
    };

    return this.http.post(`${this.uri}/agency/register_agency`, data);
  }
}
