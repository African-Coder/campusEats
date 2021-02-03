import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {
    
    email:'',
    confirmPassword:'',
    password:''
  };

  constructor(private _registrationService: RegistrationService) { }

  ngOnInit(): void {
  }


  saveRegister(regForm: NgForm): void {
    this._registrationService.registration(this.user)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    )
  } 

  // saveRegister(){
  //   console.log(this.user);
  // }
}
