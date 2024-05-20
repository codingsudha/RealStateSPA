import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm!:FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null,Validators.required),
      userEmail: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, this. passwordMatchingValidator);
  }

  passwordMatchingValidator(c: AbstractControl):  { notSame: boolean } | null {
    return c.value.password === c.value.confirmPassword ? null : { notSame: true };
  }

  onSubmit(){
    console.log(this.registrationForm);
    console.log('reaached here');
    console.log(this.registrationForm.get('userName')?.value);
    console.log('reached here also');
  }

  // ------------------------------------
    // Getter methods for all form controls
    // ------------------------------------
    get userName() {
      return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
      return this.registrationForm.get('userEmail') as FormControl;
  }
  get password() {
      return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
      return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
      return this.registrationForm.get('mobile') as FormControl;
  }
  // ------------------------
}


