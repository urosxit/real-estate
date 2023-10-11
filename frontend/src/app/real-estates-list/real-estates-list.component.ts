import { Component, Input, OnInit } from '@angular/core';
import { RealEstateModel } from '../models/realEstateModel';

@Component({
  selector: 'app-real-estates-list',
  templateUrl: './real-estates-list.component.html',
  styleUrls: ['./real-estates-list.component.css']
})
export class RealEstatesListComponent implements OnInit {
  @Input() realEstates: RealEstateModel[];
  constructor() { }

  ngOnInit(): void {
    console.info(this.realEstates);
  }
}
