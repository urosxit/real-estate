import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {}

  uri = 'http://localhost:4000';

   //dohvati sve opstine
   getAllMunicipalities(){

    const data = {
      //empty
    }

    return this.http.post(`${this.uri}/location/getAllMunicipalities`, data);
  }

  //dodaj mikrolokaciju
  add_location(
    my_city: String,
    my_municipality: String,
    my_microlocation: String,
    my_street: String
     ) {

    const data = {
      city: my_city,
      municipality: my_municipality,
      microlocation: my_microlocation,
      street: my_street
    }


    return this.http.post(`${this.uri}/location/add_location`, data);
    throw new Error('Method not implemented.');
  }

}
