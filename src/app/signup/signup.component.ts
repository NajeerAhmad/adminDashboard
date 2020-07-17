import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationComponent } from '../services/validation/validation.component';
import { SharedService } from '../services/shared.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userDetailsForm: FormGroup
  showform = 'registration';
  placeHolder = 'Name';
  email = 'EMAIL';
  mobileNo = 'MOBILE_NO';
  userAccount: {
    firstName: string, email: string, phone: { mobile: number, landline: number },
    role: string
  } = { firstName: '', email: '', phone: { mobile: null, landline: null }, role: '' };
  usersArray = [];
  userData: any;
  getFormData: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sharedService: SharedService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {


    this.userDetailsForm = this.formBuilder.group({
      role: ['', [Validators.required]],
      name: ['', [Validators.required, ValidationComponent.nameValidator, Validators.maxLength(200), Validators.pattern('^[a-zA-Z .\']*$')]],
      email: ['', [Validators.required, ValidationComponent.emailV, Validators.maxLength(50)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[4-9][0-9]{9}$/), Validators.maxLength(10), Validators.minLength(10)]],
    })


  }

  ngOnInit() {

  }

  assignPlaceHolder() {
    if (this.userAccount.role === 'Training Partner') {
    } else if (this.userAccount.role === 'Candidate') {
      // this.router.navigate(['/candidate-registration/registration']);
    } else {
      // this.placeHolder = 'NAME';
    }
  }


  register() {
    console.log('this.userDetailsForm.value', this.userDetailsForm.value)
    this.usersArray.push(this.userDetailsForm.value);
    this.sharedService.setData(this.usersArray);
    this.authService.isSignin = true;
    this.router.navigate(['./login']);
  }

  login() {
    this.router.navigate(['./login']);
  }

}
