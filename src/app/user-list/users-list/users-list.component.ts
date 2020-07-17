import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationComponent } from 'src/app/services/validation/validation.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: any;
  userDetailsForm: FormGroup
  showform = 'registration';
  role = 'Role';
  placeHolder = 'Name';
  email = 'EMAIL';
  mobileNo = 'MOBILE_NO';
  userAccount: {
    firstName: string, email: string, phone: { mobile: number, landline: number },
    role: string
  } = { firstName: '', email: '', phone: { mobile: null, landline: null }, role: '' };
  usersArray = []
  isResiter = true;

  constructor(private sharedService: SharedService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    activatedRoute.params.subscribe(form => {
      console.log('form', form)
      if (form) {
        this.patchData(form)
      }
    })

    this.userDetailsForm = this.formBuilder.group({
      role: ['', [Validators.required]],
      name: ['', [Validators.required, ValidationComponent.nameValidator, Validators.maxLength(200), Validators.pattern('^[a-zA-Z .\']*$')]],
      email: ['', [Validators.required, ValidationComponent.emailV, Validators.maxLength(50)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[4-9][0-9]{9}$/), Validators.maxLength(10), Validators.minLength(10)]],
    })



  }

  ngOnInit() {
    this.usersList = this.sharedService.usersData;
    console.log('users', this.usersList);
    this.authService.getAllUsers().subscribe(
      authenticated => {
        console.log('kjdkfjdf', authenticated)
        if (authenticated && authenticated.length > 0) {
          this.usersList = authenticated;
        }
      })
  }

  register() {
    console.log('this.userDetailsForm.value', this.userDetailsForm.value)
    this.usersArray.push(this.userDetailsForm.value);
    this.isResiter = true;
  }

  patchData(formData) {
    if (formData && formData.role) {
      this.userDetailsForm.get('role').setValue(formData.role)
    }
    if (formData && formData.username) {
      this.userDetailsForm.get('name').setValue(formData.username)
    }
    if (formData && formData.email) {
      this.userDetailsForm.get('email').setValue(formData.email)
    }
    if (formData && formData.mobile) {
      this.userDetailsForm.get('mobile').setValue(formData.mobile)
    }
  }


  editUser(data) {
    this.router.navigate(['./users', data.role])
  }

}
