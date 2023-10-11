import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  uri = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) { }

  topFiveRealEstates() {
    return this.httpClient.get(`${this.uri}/realEstates/topFiveRealEstates`);
  }

  getRealEstateById(id) {
    const data = {
      id: id
    };
    return this.httpClient.post(`${this.uri}/realEstates/getRealEstateById`, data);
  }

  searchRealEstates(realEstateType, locationIds, microlocationIds, price, squareMeters, numberOfRooms) {
    const data = {
      realEstateType: realEstateType,
      locationIds: locationIds,
      microlocationIds: microlocationIds,
      price: price,
      squareMeters: squareMeters,
      numberOfRooms: numberOfRooms,
      sold: false
    };
    return this.httpClient.post(`${this.uri}/realEstates/getFilteredRealEstates`, data);
  }

  getRealEstatesFromAdvertiser(addedBy) {
    const data = {
      addedBy: addedBy
    };
    return this.httpClient.post(`${this.uri}/realEstates/getRealEstatesFromAdvertiser`, data);
  }

  markEstateAsSold(id) {
    const data = {
      id: id
    };
    return this.httpClient.post(`${this.uri}/realEstates/markEstateAsSold`, data);
  }

  getAllRealEstates() {
    return this.httpClient.get(`${this.uri}/realEstates/getAllRealEstates`);
  }

  addNewRealEstate(id, name, realEstateType, locationId, microlocationId, address, squareMeters, numberOfRooms, price, yearBuilt,
    condition, heating, floor, maxFloors, parking, balcony, lodge, frenchBalcony, elevator, basement, garage, airconditioner,
    garden, intercom, telephone, description, dateAdded, addedBy, publicTransportation, averagePrice, images) {
    const data = {
      id: id,
      name: name,
      realEstateType: realEstateType,
      locationId: locationId,
      microlocationId: microlocationId,
      address: address,
      squareMeters: squareMeters,
      numberOfRooms: numberOfRooms,
      price: price,
      yearBuilt: yearBuilt,
      condition: condition,
      heating: heating,
      floor: floor,
      maxFloors: maxFloors,
      parking: parking,
      balcony: balcony,
      lodge: lodge,
      frenchBalcony: frenchBalcony,
      elevator: elevator,
      basement: basement,
      garage: garage,
      airconditioner: airconditioner,
      garden: garden,
      intercom: intercom,
      telephone: telephone,
      description: description,
      dateAdded: dateAdded,
      addedBy: addedBy,
      publicTransportation: publicTransportation,
      averagePrice: averagePrice,
      images: images
    };
    return this.httpClient.post(`${this.uri}/realEstates/addNewRealEstate`, data);
  }

  updateAveragePrice(ids, averagePrice) {
    const data = {
      ids: ids,
      averagePrice: averagePrice
    };
    return this.httpClient.post(`${this.uri}/realEstates/updateAveragePrice`, data);
  }
}
