import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { DelegateComponent } from './delegate/delegate.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';
import { RealestateComponent } from './realestate/realestate.component';
import { TestiranjeRegComponent } from './testiranje-reg/testiranje-reg.component';
import { ProbamNestoComponent } from './probam-nesto/probam-nesto.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    LoginComponent,
    HomeComponent,
    DelegateComponent,
    RegisterComponent,
    AdminComponent,
    TestComponent,
    RealestateComponent,
    TestiranjeRegComponent,
    ProbamNestoComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
    /*,
    FormControl,
    FormGroup,
    Validators*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
