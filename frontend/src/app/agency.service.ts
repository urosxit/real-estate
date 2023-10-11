import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getAllAgencies() {
    return this.httpClient.get(`${this.uri}/agencies/getAllAgencies`);
  }

  addNewAgency(name, locationId, address, phoneNumber, pib) {
    const data = {
      name: name,
      locationId: locationId,
      address: address,
      phoneNumber: phoneNumber,
      pib: pib
    };
    return this.httpClient.post(`${this.uri}/agencies/addNewAgency`, data);
  }
}
