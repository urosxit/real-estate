import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../models/realEstate';
import { User } from '../models/user';
import { RealEstateService } from '../real-estate.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-advertiser',
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.css']
})
export class AdvertiserComponent implements OnInit {

  userId: number;
  realEstates: RealEstate[];

  constructor(private userService: UserService,
    private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    let advertiser = localStorage.getItem('advertiser');
    this.userService.getUserByUsername(advertiser).subscribe((data: User) => {
      if (data) {
        this.userId = data.id;
        this.realEstateService.getRealEstatesFromAdvertiser(this.userId).subscribe((data: RealEstate[]) => {
          if (data) {
            this.realEstates = data;
          }
        });
      }
    });
  }

  change(id) { }

  sold(id) {
    this.realEstateService.markEstateAsSold(id).subscribe((data: RealEstate) => {
      if (data) {
        window.location.href = '/advertiser';
      }
    });
  }
}
