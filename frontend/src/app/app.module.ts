import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BuyerComponent } from './buyer/buyer.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RealEstatesListComponent } from './real-estates-list/real-estates-list.component';
import { AgencyComponent } from './agency/agency.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { NewRealEstateComponent } from './new-real-estate/new-real-estate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChangePasswordComponent,
    OrganizerComponent,
    RegisterComponent,
    BuyerComponent,
    AdvertiserComponent,
    AdministratorComponent,
    HeaderComponent,
    ChangePasswordComponent,
    RealEstatesListComponent,
    AgencyComponent,
    RealEstateComponent,
    NewRealEstateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
