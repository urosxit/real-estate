import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent implements OnInit {

  id: number;

  page: number = 1;
  pageSize: number = 10;
  username: string;
  user: User;

  users: UserModel[];
  agencies: Agency[];

  realEstateTypes: RealEstateType[];
  realEstateType: string;

  locations: Location[] = [];
  microlocations: Microlocation[] = [];

  cities: City[];
  chosenCities: string[] = [];

  realEstateModel: RealEstateModel;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private agencyService: AgencyService,
    private locationService: LocationService,
    private microlocationService: MicrolocationService,
    private realEstateTypeService: RealEstateTypeService,
    private realEstateService: RealEstateService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.username = localStorage.getItem('buyer');

      this.agencyService.getAllAgencies().subscribe((data: Agency[]) => {
        this.agencies = data;
      });

      this.locationService.getAllLocations().subscribe((data: Location[]) => {
        this.locations = data;
      });

      this.microlocationService.getAllMicrolocations().subscribe((data: Microlocation[]) => {
        this.microlocations = data;
        this.mapCities();
      });

      this.userService.getAllUsers().subscribe((data: User[]) => {
        if (data) {
          this.users = data.map(u => {
            let agency = this.agencies.find(a => a.pib == u.agency);
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

      this.realEstateTypeService.getAllTypes().subscribe((data: RealEstateType[]) => {
        this.realEstateTypes = data;
      });

      this.realEstateService.getRealEstateById(this.id).subscribe((data: RealEstate) => {
        if (data) {
          this.realEstateModel = {
            realEstate: data[0],
            addedBy: this.users.find(u => u.id === data[0].addedBy),
            locationName: this.locations.find(l => l.id === data[0].fullLocation.locationId).name,
            microlocationName: this.microlocations.find(m => m.id === data[0].fullLocation.microlocationId).name,
            realEstateTypeString: this.realEstateTypes.find(ret => ret.id === data[0].realEstateType).name,
            showAdvertiserData: false,
            randomImage: '',
            firstImage: data[0].images[0],
            images: data[0].images.splice(1, data[0].images.length)
          }
        };
      });
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

  changeShowAdvertiserData(showData) {
    this.realEstateModel.showAdvertiserData = !showData;
  }

  addToFavorites(id) { }
}
