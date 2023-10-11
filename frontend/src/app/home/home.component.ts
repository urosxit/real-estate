import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { MicrolocationService } from '../microlocation.service';
import { City } from '../models/city';
import { Location } from '../models/location';
import { Microlocation } from '../models/microlocation';
import { RealEstate } from '../models/realEstate';
import { RealEstateModel } from '../models/realEstateModel';
import { RealEstateType } from '../models/realEstateType';
import { RealEstateTypeService } from '../real-estate-type.service';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  realEstateTypes: RealEstateType[];
  realEstateType: string;

  realEstates: RealEstateModel[];

  locations: Location[] = [];
  microlocations: Microlocation[] = [];

  cities: City[];
  chosenCities: string[] = [];

  constructor(private locationService: LocationService,
    private microlocationService: MicrolocationService,
    private realEstateTypeService: RealEstateTypeService,
    private realEstateService: RealEstateService) { }

  ngOnInit(): void {
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

    this.realEstateService.topFiveRealEstates().subscribe((data: RealEstate[]) => {
      if (data) {
        data.sort((a, b) => {
          let dateA = new Date(a.dateAdded);
          let dateB = new Date(b.dateAdded);
          return dateB.getTime() - dateA.getTime();
        });
        data = data.slice(0, 5);
        this.realEstates = data.map(re => {
          let realEstateModel: RealEstateModel = {
            realEstate: re,
            addedBy: null,
            locationName: '',
            microlocationName: '',
            realEstateTypeString: '',
            showAdvertiserData: false,
            randomImage: re.images[Math.floor(Math.random() * re.images.length)],
            firstImage: '',
            images: []
          }
          return realEstateModel;
        });
      }
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

}
