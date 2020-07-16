import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials: { userName: string, password: string } = { userName: '', password: '' };
  loginForm: FormGroup;
  show: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.show = false;
  }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.loginForm.value);
  }

  showPassClick() {
    this.show = !this.show;
  }

}
