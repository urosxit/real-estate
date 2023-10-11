import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserType } from '../models/userType';
import { UserTypeService } from '../user-type.service';
import { City } from '../models/city';
import { Agency } from '../models/agency';
import { AgencyService } from '../agency.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordService } from '../password.service';
import { LocationService } from '../location.service';
import { Location } from '../models/location';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  recaptchaGroup: FormGroup;
  siteKey: string = "6LfDDeYdAAAAAFrz2aFVz_mnBuvj41sNwu1jzEb7";

  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  location: string;
  birthDate: Date;
  phoneNumber: string;
  email: string;
  userType: string;
  agency: string;
  licenseNo: string;
  profileImage: File;
  userTypeDescription: string;

  locations: Location[];
  agencies: Agency[];
  userTypes: UserType[];

  profileImagePath: string = '../../assets/profileImages';
  responseData: string = '';

  invalidFileName: string = '';
  invalidDataMessage: string = '';
  invalidProfileImage: string = '';

  constructor(private formBuilder: FormBuilder,
    private locationService: LocationService,
    private agencyService: AgencyService,
    private userTypeService: UserTypeService,
    private userService: UserService,
    private passwordService: PasswordService,
    private imageService: ImageService,
    private router: Router) { }

  ngOnInit(): void {
    this.recaptchaGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

    this.locationService.getAllLocations().subscribe((data: Location[]) => {
      this.locations = data;
    });

    this.userTypeService.getAllDbUserTypes().subscribe((data: UserType[]) => {
      this.userTypes = data;
    });

    this.agencyService.getAllAgencies().subscribe((data: Agency[]) => {
      this.agencies = data;
    });
  }

  onFileChanged(event) {
    this.invalidProfileImage = '';
    const minSize = 100;
    const maxSize = 300;

    var url = window.URL || window.webkitURL;
    var file, img;

    this.profileImage = event.target.files[0];
    if ((file = event.target.files[0])) {
      img = new Image();
      var objectUrl = url.createObjectURL(file);
      img.onload = function () {
        console.log(this.width + " " + this.height);
        url.revokeObjectURL(objectUrl);
        if (this.height < minSize || this.height > maxSize || this.width < minSize || this.width > maxSize) {
          this.invalidProfileImage = 'Minimalna veličina slike mora biti 100x100 a maksimalna 300x300!';
          alert('Minimalna veličina slike mora biti 100x100 a maksimalna 300x300!');
        }
      };
      img.src = objectUrl;
      this.imageService.uploadImage(this.profileImage).subscribe((data) => { console.log(data) });
    }
  }

  register() {
    this.invalidDataMessage = '';
    this.responseData = '';
    this.invalidProfileImage = '';

    if (typeof this.username == 'undefined' || typeof this.password == 'undefined' || typeof this.confirmPassword == 'undefined' ||
      typeof this.firstName == 'undefined' || typeof this.lastName == 'undefined' || typeof this.email == 'undefined' ||
      typeof this.birthDate == 'undefined') {
      this.invalidDataMessage += 'Morate popuniti sve podatke!';
    }
    else {
      this.canRegisterUser();

      if (this.passwordService.validatePassword(this.password) === null) {
        this.invalidDataMessage += 'Lozinka mora sadržati 8 karaktera, od čega bar jedno veliko slovo, jedan broj i jedan specijalan karakter, i mora počinjati slovom. ';
      }

      if (!this.passwordService.arePasswordEqual(this.password, this.confirmPassword)) {
        this.invalidDataMessage += 'Polje "lozinka" i "Potvrda lozinke" se ne poklapaju. ';
      }

      if (this.GetDefaultValue(this.userType) == '') {
        this.invalidDataMessage += 'Morate odabrati tip korisnika. ';
      }
      else if (this.userType === 'advertiser' && (this.GetDefaultValue(this.agency) === '' || this.GetDefaultValue(this.licenseNo) === '')) {
        this.invalidDataMessage += 'Oglašivač mora imati popunjenu agenciju i broj licence agenta!'
      }

      let profileImageName = '';
      if (this.profileImage != undefined) {
        profileImageName = this.profileImage.name;
      }
      else {
        this.invalidProfileImage = 'Morate dodati profilnu sliku!';
      }

      if (this.responseData === '' && this.invalidDataMessage === '' && this.invalidProfileImage === '' && profileImageName != '') {
        this.userService.register(this.firstName,
          this.lastName,
          this.username,
          this.password,
          this.GetCityId(),
          this.GetBirthDate(),
          this.GetDefaultValue(this.phoneNumber),
          this.email,
          this.GetAgencyId(),
          this.GetDefaultValue(this.licenseNo),
          this.GetUserType(),
          profileImageName).subscribe(data => {
            if (data) {
              window.location.href = '';
              alert('Uspešno ste se registrovali!');
            }
            else {
              alert('Došlo je do greške prilikom kreiranja profila. Molimo Vas pokušajte ponovo.');
              this.router.navigate['register'];
            }
          });
      }
    }
  }

  canRegisterUser() {
    this.userService.canRegisterUser(this.username, this.email).subscribe((data: string) => {
      if (data) {
        this.responseData = data;
      }
    });
  }

  GetCityId() {
    if (typeof this.location == 'undefined') {
      return this.locations[0].id;
    }
    else {
      return this.locations.find(c => c.name === this.location).id;
    }
  }

  GetBirthDate() {
    if (typeof this.birthDate == 'undefined') {
      return '';
    }
    else {
      return this.birthDate;
    }
  }

  GetAgencyId() {
    if (typeof this.agency == 'undefined') {
      return 0;
    }
    else {
      return this.agencies.find(a => a.name === this.agency).pib;
    }
  }

  GetDefaultValue(value) {
    if (typeof value == 'undefined') {
      return '';
    }
    else {
      return value;
    }
  }

  GetUserType() {
    if (this.userType === 'buyer') {
      return 1;
    }
    else {
      return 2;
    }
  }
}
