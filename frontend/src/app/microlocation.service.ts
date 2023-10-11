import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicrolocationService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  getAllMicrolocations() {
    return this.httpClient.get(`${this.uri}/microlocations/getAllMicrolocations`);
  }
}
