import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  uploadImage(profileImage) {
    const formData = new FormData();
    formData.append('image', profileImage, profileImage.name);
    return this.httpClient.post(`${this.uri}/uploadImage`, formData, { responseType: 'text' });
  }
}
