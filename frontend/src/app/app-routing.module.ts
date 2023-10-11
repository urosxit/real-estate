import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewRealEstateComponent } from './new-real-estate/new-real-estate.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'organizer', component: OrganizerComponent },
  { path: 'buyer', component: BuyerComponent },
  { path: 'advertiser', component: AdvertiserComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'realEstate/:id', component: RealEstateComponent },
  { path: 'newRealEstate/:id', component: NewRealEstateComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
