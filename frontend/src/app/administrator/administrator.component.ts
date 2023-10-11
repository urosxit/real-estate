import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { LocationService } from '../location.service';
import { Agency } from '../models/agency';
import { Location } from '../models/location';
import { User } from '../models/user';
import { UserModel } from '../models/userModel';
import { UserType } from '../models/userType';
import { UserTypeService } from '../user-type.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  users: UserModel[];
  locations: Location[];
  agencies: Agency[];
  userTypes: UserType[];

  addNewUserFlag: boolean = false;
  addNewAgencyFlag: boolean = false;
  operationResult: string = '';

  constructor(private userService: UserService,
    private agencyService: AgencyService,
    private userTypeService: UserTypeService,
    private locationService: LocationService) { }

  ngOnInit(): void {
    this.operationResult = '';

    this.locationService.getAllLocations().subscribe((data: Location[]) => {
      this.locations = data;
    });

    this.agencyService.getAllAgencies().subscribe((data: Agency[]) => {
      this.agencies = data;
    });

    this.userTypeService.getAllDbUserTypes().subscribe((data: UserType[]) => {
      this.userTypes = data;
    });

    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data.map(u => {
        let agency = this.agencies.find(a => a.pib === u.agency);
        let agencyName = '';
        if (typeof agency != 'undefined' || agency != null) {
          agencyName = agency.name;
        }
        let usr: UserModel = {
          id: u.id,
          username: u.username,
          email: u.email,
          firstName: u.firstName,
          lastName: u.lastName,
          birthDate: u.birthDate,
          city: this.locations.find(l => l.id === u.city).name,
          phoneNumber: u.phoneNumber,
          agency: agencyName,
          agencyAddress: '',
          agencyCity: '',
          agencyPIB: '',
          licenseNo: u.licenseNo,
          userType: this.userTypes.find(t => t.id === u.userType).description,
          waitingApproval: u.waitingApproval,
          denied: u.denied
        };
        return usr;
      });
    });
  }

  accept(username) {
    this.userService.approveUser(username).subscribe((data: any) => {
      if (data.ok === 1) {
        this.operationResult = '';
        window.location.href = '/administrator';
      }
      else {
        this.operationResult = 'Korisnik ne može biti odobren trenutno, molimo Vas pokušajte kasnije.';
      }
    });

  }

  reject(username) {
    this.userService.rejectUser(username).subscribe((data: string) => {
      if (data) {
        this.operationResult = '';
        window.location.href = '/administrator';
      }
      else {
        this.operationResult = 'Korisnik ne može biti odbijen trenutno, molimo Vas pokušajte kasnije.';
      }
    });
  }

  delete(username) {
    this.userService.deleteUser(username).subscribe((data: string) => {
      if (data) {
        this.operationResult = '';
        window.location.href = '/administrator';
      }
      else {
        this.operationResult = 'Korisnik ne može biti obrisan trenutno, molimo Vas pokušajte kasnije.';
      }
    });
  }

  edit(username) { }

  addNewUser() {
    this.addNewUserFlag = true;
    this.addNewAgencyFlag = false;
  }

  addNewAgency() {
    this.addNewAgencyFlag = true;
    this.addNewUserFlag = false;
  }
}
