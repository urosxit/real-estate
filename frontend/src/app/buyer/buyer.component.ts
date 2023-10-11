import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { LocationService } from '../location.service';
import { MicrolocationService } from '../microlocation.service';
import { Agency } from '../models/agency';
import { City } from '../models/city';
import { Location } from '../models/location';
import { Microlocation } from '../models/microlocation';
import { RealEstate } from '../models/realEstate';
import { RealEstateModel } from '../models/realEstateModel';
import { RealEstateType } from '../models/realEstateType';
import { User } from '../models/user';
import { UserModel } from '../models/userModel';
import { RealEstateTypeService } from '../real-estate-type.service';
import { RealEstateService } from '../real-estate.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  page: number = 1;
  pageSize: number = 10;
  username: string;
  user: User;

  users: UserModel[];
  agencies: Agency[];

  realEstateTypes: RealEstateType[];
  realEstateType: string = 'Stan';

  locations: Location[] = [];
  microlocations: Microlocation[] = [];

  cities: City[];
  chosenCities: string[] = [];

  realEstates: RealEstateModel[];

  maxPrice: string;
  fromSquareMt: string;

  numberOfRooms: string[] = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5+'];
  minNumberOfRooms: string;

  validationMessage = '';

  constructor(private userService: UserService,
    private agencyService: AgencyService,
    private locationService: LocationService,
    private microlocationService: MicrolocationService,
    private realEstateTypeService: RealEstateTypeService,
    private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('buyer');

    this.agencyService.getAllAgencies().subscribe((data: Agency[]) => {
      this.agencies = data;
    });

    this.userService.getAllUsers().subscribe((data: User[]) => {
      if (data) {
        this.users = data.map(u => {
          let agency = this.agencies.find(a => a.pib === u.agency);
          let agencyName = '';
          let agencyAddress = '';
          let agencyCity = '';
          let agencyPIB = '';
          if (typeof agency != 'undefined' || agency != null) {
            agencyName = agency.name;
            agencyAddress = agency.address;
            agencyCity = this.locations.find(l => l.id === agency.locationId).name;
            agencyPIB = agency.pib;
          }
          let usr: UserModel = {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            phoneNumber: u.phoneNumber,
            agency: agencyName,
            agencyAddress: agencyAddress,
            agencyCity: agencyCity,
            agencyPIB: agencyPIB,
            licenseNo: u.licenseNo,
            birthDate: u.birthDate,
            city: '',
            email: u.email,
            userType: '',
            username: u.username,
            waitingApproval: u.waitingApproval,
            denied: u.denied
          };
          return usr;
        });
        this.user = data.find(u => u.username === this.username);
      }
    });

    this.microlocationService.getAllMicrolocations().subscribe((data: Microlocation[]) => {
      this.microlocations = data;
      this.locationService.getAllLocations().subscribe((data: Location[]) => {
        this.locations = data;
        this.mapCities();
      });
    });

    this.realEstateTypeService.getAllTypes().subscribe((data: RealEstateType[]) => {
      this.realEstateTypes = data;
    });
  }

  mapCities() {
    this.cities = this.microlocations.map(ml => {
      let specificLocation = this.locations.find(l => l.id === ml.locationId);
      let cityModel: City = {
        location: specificLocation.name,
        locationId: specificLocation.id,
        microlocation: ml.name,
        microlocationId: ml.id,
        fullLocation: specificLocation.name + '/' + ml.name
      };
      return cityModel;
    });
  }

  search() {
    if (typeof this.realEstateType == undefined) {
      this.validationMessage = 'Tip nekretnine je obavezan parametar za pretragu!';
    }
    else {
      this.realEstateService.searchRealEstates(
        this.getRealEstateTypeId(),
        this.getLocationIds(),
        this.getMicrolocationIds(),
        this.getMaxPrice(),
        this.getSquareMt(),
        this.getMinNumberOfRooms())
        .subscribe((data: RealEstate[]) => {
          if (data) {
            this.realEstates = data.map(re => {
              let realEstateModel: RealEstateModel = {
                realEstate: re,
                addedBy: this.users.find(u => u.id === re.addedBy),
                locationName: this.locations.find(l => l.id === re.fullLocation.locationId).name,
                microlocationName: this.microlocations.find(m => m.id === re.fullLocation.microlocationId).name,
                realEstateTypeString: this.realEstateTypes.find(ret => ret.id === re.realEstateType).name,
                showAdvertiserData: false,
                randomImage: '',
                firstImage: '',
                images: []
              }
              return realEstateModel;
            });
          }
        });
    }
  }

  getRealEstateTypeId() {
    if (typeof this.realEstateType == 'undefined' || this.realEstateType === '') {
      return this.realEstateTypes[0].id;
    }
    else {
      return this.realEstateTypes.find(t => t.name === this.realEstateType).id;
    }
  }

  getLocationIds() {
    if (this.chosenCities.length === 0) {
      return this.cities.map(c => c.locationId);
    }
    else {
      return this.chosenCities.map(cc => this.cities.find(c => c.fullLocation === cc).locationId);
    }
  }

  getMicrolocationIds() {
    if (this.chosenCities.length === 0) {
      return this.cities.map(c => c.microlocationId);
    }
    else {
      return this.chosenCities.map(cc => this.cities.find(c => c.fullLocation === cc).microlocationId);
    }
  }

  getMaxPrice() {
    if (typeof this.maxPrice == 'undefined' || this.maxPrice === '') {
      return Number.MAX_VALUE;
    }
    else {
      return parseInt(this.maxPrice);
    }
  }

  getSquareMt() {
    if (typeof this.fromSquareMt == 'undefined' || this.maxPrice === '') {
      return 0;
    }
    else {
      return parseInt(this.fromSquareMt);
    }
  }

  getMinNumberOfRooms() {
    if (typeof this.minNumberOfRooms == 'undefined' || this.minNumberOfRooms === '') {
      return 0;
    }
    else {
      return this.minNumberOfRooms;
    }
  }

  changeShowAdvertiserData(id, showData) {
    let re = this.realEstates.find(re => re.realEstate.id === id);
    re.showAdvertiserData = !showData;
  }

  addToFavorites(realEstateId) { }
}
