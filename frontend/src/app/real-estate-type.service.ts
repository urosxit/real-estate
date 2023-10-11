import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealEstateTypeService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getAllTypes() {
    return this.httpClient.get(`${this.uri}/realEstateTypes/getAllRealEstateTypes`);
  }
}
