import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getAllLocations() {
    return this.httpClient.get(`${this.uri}/locations/getAllLocations`);
  }
}
