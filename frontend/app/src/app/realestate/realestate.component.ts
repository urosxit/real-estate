import { Component, OnInit } from '@angular/core';
import { Characteristics } from '../models/characteristics';
import { User } from '../models/user';

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.css']
})
export class RealestateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }

  //polja forme
  reg_estate_naziv: String;
  reg_estate_lokacija: String;
  reg_estate_tip: String;
  reg_estete_cena: Number;
  reg_estate_kvadratura: Number;
  reg_estate_sobe: Number;
  reg_estate_godina_izgradnje: Number;
  reg_estate_oglasivac: User;

  reg_estate_stanje: String;
  reg_estate_tip_grejanja: String;
  reg_estate_broj_sprata: Number;
  reg_estate_mesecne_resije: Number;
  reg_estate_karakteristike: Characteristics;

  reg_ukupna_spratnost: String;
  reg_sprat: String;

  prihvati_uslove: Boolean;
  reg_estate_terasa: Boolean;
  reg_estate_podrum: Boolean;
  reg_estate_internet: Boolean;
  reg_estate_lodja: Boolean;
  reg_estate_garaza: Boolean;
  reg_estate_interfon: Boolean;
  reg_estate_franc_balkon: Boolean;
  reg_estate_sa_bastom: Boolean;
  reg_estate_telefon: Boolean;
  reg_estate_lift: Boolean;
  reg_estate_klima: Boolean;





  register(){
    alert("uwu");
  }

   reg_test(){
    alert("uwu");
  }
}
