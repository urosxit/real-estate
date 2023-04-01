import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RealestateComponent } from './realestate/realestate.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { TestiranjeRegComponent } from './testiranje-reg/testiranje-reg.component';

const routes: Routes = [

{path: "guest", component: GuestComponent},
{path: "login", component: LoginComponent},
{path: "register", component: RegisterComponent},
{path: "admin", component: AdminComponent },
{path: "test", component: TestComponent},
{path: "realestate", component: RealestateComponent},
{path: "testiranje_reg", component: TestiranjeRegComponent},
{path: "", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
