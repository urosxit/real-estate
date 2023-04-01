import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  uri = 'http://localhost:4000';

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


  //dohvati sve agencije
  getAllAgencies(){

    const data = {
      //empty
    }

    return this.http.post(`${this.uri}/agency/getAllAgencies`, data);
  }



  //test_find
  test_find(test_ime, test_grad, test_pib) {
    const data = {
      name: test_ime,
      city: test_grad,
      pib: test_pib,
    };

    return this.http.post(`${this.uri}/agency/find_agency`, data);
  }
}
