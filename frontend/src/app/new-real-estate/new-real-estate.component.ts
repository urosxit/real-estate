import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { LocationService } from '../location.service';
import { MicrolocationService } from '../microlocation.service';
import { Location } from '../models/location';
import { Microlocation } from '../models/microlocation';
import { RealEstate } from '../models/realEstate';
import { RealEstateType } from '../models/realEstateType';
import { RealEstateTypeService } from '../real-estate-type.service';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-new-real-estate',
  templateUrl: './new-real-estate.component.html',
  styleUrls: ['./new-real-estate.component.css']
})
export class NewRealEstateComponent implements OnInit {

  addedBy: string;

  name: string = '';
  realEstateTypes: RealEstateType[];
  realEstateType: string;

  locations: Location[];
  microlocations: Microlocation[];
  location: string;
  microlocation: string;

  address: string = '';

  squareMeters: number;

  numberOfRoomsArray: string[] = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5+'];
  numberOfRooms: string = '';

  price: number;
  yearBuilt: number;
  conditions: string[] = ['izvorno', 'renovirano', 'LUX'];
  condition: string = 'izvorno';
  heatings: string[] = ['CG', 'EG', 'TA', 'gas', 'podno', 'toplotne pumpe'];
  heating: string = 'CG';
  floor: number;
  maxFloors: number;
  parking: string = '';
  balcony: boolean = false;
  lodge: boolean = false;
  frenchBalcony: boolean = false;
  elevator: boolean = false;
  basement: boolean = false;
  garage: boolean = false;
  airconditioner: boolean = false;
  garden: boolean = false;
  internet: boolean = false;
  intercom: boolean = false;
  telephone: boolean = false;
  description: string = '';
  images: string[] = [];

  publicTransportations: string[] = ['2', '3', '5', '6', '12', '13', '14', '16', '17', '18', '22', '23', '25', '26', '27', '30',
    '31', '33', '37', '40', '41', '44', '46', '50', '51', '52', '53', '55', '56', '58', '65', '68', '74'];
  selectedTransportation: [];

  invalidDataMessage: string = '';
  invalidImagesMessage: string = '';

  realEstates: RealEstate[];
  selectedRealEstates: number[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private realEstateTypeService: RealEstateTypeService,
    private locationService: LocationService,
    private microlocationService: MicrolocationService,
    private imageService: ImageService,
    private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.addedBy = params['id'];
    });

    this.realEstateTypeService.getAllTypes().subscribe((data: RealEstateType[]) => {
      if (data) {
        this.realEstateTypes = data;
      }
    });

    this.locationService.getAllLocations().subscribe((data: Location[]) => {
      if (data) {
        this.locations = data;
      }
    });

    this.microlocationService.getAllMicrolocations().subscribe((data: Microlocation[]) => {
      if (data) {
        this.microlocations = data;
      }
    });

    this.realEstateService.getAllRealEstates().subscribe((data: RealEstate[]) => {
      if (data) {
        this.realEstates = data;
      }
    });
  }

  onFileChanged(event) {
    this.invalidDataMessage = '';

    var url = window.URL || window.webkitURL;
    var file, img;

    let uploadedImages = event.target.files;
    if (uploadedImages.length < 3) {
      this.invalidImagesMessage = 'Morate uneti bar 3 slike';
    }
    else if (uploadedImages.length > 6) {
      this.invalidDataMessage = 'Možete uneti najviše 6 slika';
    }
    else {
      for (var i = 0; i < event.target.files.length; i++) {
        if ((file = event.target.files[i])) {
          img = new Image();
          var objectUrl = url.createObjectURL(file);
          img.onload = function () {
            console.log(this.width + " " + this.height);
            url.revokeObjectURL(objectUrl);
          };
          img.src = objectUrl;
          this.imageService.uploadImage(file).subscribe((data) => { console.log(data) });
          this.images.push(file.name);
        }
      }
    }
  }

  addNewRealEstate() {
    if (this.name === '' || this.address === '' || this.squareMeters < 0 || typeof this.squareMeters == undefined || this.numberOfRooms === '' ||
      this.price < 0 || typeof this.price == undefined || this.yearBuilt < 1800 || typeof this.yearBuilt == undefined || this.condition === '' ||
      this.heating === '' || this.floor < -1 || typeof this.floor == undefined || this.maxFloors < 0 || typeof this.maxFloors == undefined ||
      this.parking === '' || this.description === '') {
      this.invalidDataMessage = 'Morate uneti sve podatke za unos nekretnine!';
    }

    const averagePrice = this.calculateAveragePrice();

    if (this.invalidDataMessage === '' && this.invalidImagesMessage === '') {
      this.getEstatesWithSameMicrolocation();

      this.realEstateService.addNewRealEstate(this.realEstates.length + 1,
        this.name,
        this.getRealEstateTypeId(),
        this.getLocationId(),
        this.getMicrolocationId(),
        this.address,
        this.squareMeters,
        this.numberOfRooms,
        this.price,
        this.yearBuilt,
        this.getCondition(),
        this.getHeating(),
        this.floor,
        this.maxFloors,
        this.parking,
        this.balcony,
        this.lodge,
        this.frenchBalcony,
        this.elevator,
        this.basement,
        this.garage,
        this.airconditioner,
        this.garden,
        this.intercom,
        this.telephone,
        this.description.substring(0, 50),
        (new Date()).toISOString().split('T')[0],
        parseInt(this.addedBy),
        this.getSelectedTransportation(),
        averagePrice,
        this.images)
        .subscribe((data: Boolean) => {
          if (data) {
            if (this.selectedRealEstates.length > 0) {
              this.realEstateService.updateAveragePrice(this.selectedRealEstates, averagePrice).subscribe((data: RealEstate[]) => {
                console.log(data);
              });
            }
            alert('Uspešno ste dodali novu nekretninu!');
            window.location.href = '/advertiser';
          }
          else {
            alert('Dodavanje nekretnine nije uspelo. Molimo Vas pokušajte kasnije');
          }
        });
    }
  }

  getEstatesWithSameMicrolocation() {
    this.realEstates.forEach(re => {
      if (re.fullLocation.microlocationId === this.getMicrolocationId()) {
        this.selectedRealEstates.push(re.id);
      }
    });
  }

  calculateAveragePrice() {
    let realEstatesOnMicrolocation = 0;
    let price = 0;
    this.realEstates.forEach(re => {
      if (re.fullLocation.microlocationId === this.getMicrolocationId()) {
        price += re.price;
        realEstatesOnMicrolocation += 1;
      }
    });
    price += this.price;
    realEstatesOnMicrolocation += 1;
    let avgPrice = price / realEstatesOnMicrolocation;
    return Math.round(avgPrice);
  }

  getRealEstateTypeId() {
    if (typeof this.realEstateType == 'undefined' || this.realEstateType === '') {
      return this.realEstateTypes[0].id;
    }
    else {
      return this.realEstateTypes.find(t => t.name === this.realEstateType).id;
    }
  }

  getLocationId() {
    if (typeof this.location == 'undefined' || this.location === '') {
      return this.locations[0].id;
    }
    else {
      return this.locations.find(l => l.name === this.location).id;
    }
  }

  getMicrolocationId() {
    if (typeof this.microlocation == 'undefined' || this.microlocation === '') {
      return this.microlocations[0].id;
    }
    else {
      return this.microlocations.find(l => l.name === this.microlocation).id;
    }
  }

  getCondition() {
    if (typeof this.condition == undefined) {
      return this.conditions[0];
    }
    else return this.condition;
  }

  getHeating() {
    if (typeof this.heating == undefined) {
      return this.heatings[0];
    }
    else return this.heating;
  }

  getSelectedTransportation() {
    if (this.selectedTransportation.length > 0) {
      return this.selectedTransportation.toString();
    }
    else {
      return '';
    }
  }
}
