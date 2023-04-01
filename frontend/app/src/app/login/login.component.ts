import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }




  prijava(){

    this.userService.login(this.username, this.password, this.type).subscribe((user:User)=>{
      if(user){

        //cuvam ulogovanog
        localStorage.setItem('logged_user', JSON.stringify(user));

        //provera tipa korisnika radi rutiranja
        if(user.type=='admin'){
          this.router.navigate(['admin']);
        }
        else if (user.type=='delegate'){
          this.router.navigate(['delegate']);
        }
        else if (user.type=='leader'){
          this.router.navigate(['delegate']);
        }
      }

      //pogresni kredencijali
      else{
        this.loginMessage = 'Wrong credentials!';
      }
    })

  }

  ngOnInit(): void {



  }

  //polja koja hvatam s forme za login

  username: String;
  password: String;
  type: String;
  loginMessage: String;

  //polja za passchange

  pass_change_username: String;
  pass_change_old_pass: String;
  pass_change_new_pass: String;

  passChangeMessage: String;

  //registracija
  reg_username: String;
  reg_password: String;
  reg_password_repeat: String;
  reg_firstname: String;
  reg_lastname: String;
  reg_country: String;
  reg_email: String;
  reg_type: String;
  reg_message: String;

  register(){

    this.userService.register(this.reg_username, this.reg_password, this.reg_firstname, this.reg_lastname, this.reg_country, this.reg_email, this.reg_type).subscribe((message:String)=>{
      if(message){
        this.reg_message = message;
      }
    })
  }

  change_pass(){

    this.userService.change_pass(this.pass_change_username, this.pass_change_old_pass, this.pass_change_new_pass).subscribe((message:String)=>{
      if(message){
        this.passChangeMessage = message;
      }
    })
    }

  login(){

      this.userService.login(this.username, this.password, this.type).subscribe((user:User)=>{
        if(user){
          localStorage.setItem('logged_user', JSON.stringify(user));
          if(user.type=='admin'){
            this.router.navigate(['admin']);
          }
          else if (user.type=='delegate'){
            this.router.navigate(['delegate']);
          }
          else if (user.type=='leader'){
            this.router.navigate(['delegate']);
          }
        }
        else{
          this.loginMessage = 'Wrong credentials!';
        }
      })
    } //login

  }


