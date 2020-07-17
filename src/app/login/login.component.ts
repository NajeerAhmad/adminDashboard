import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials: { userName: string, password: string } = { userName: '', password: '' };
  loginForm: FormGroup;
  show: boolean;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
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
    let uname = this.loginForm.value.username;
    let pwd = this.loginForm.value.password;
    this.authService.getAllUsers().subscribe(
      authenticated => {
        authenticated.map((user, index) => {
          if ((user.username === uname) && (user.password === pwd)) {
            this.authService.isloggedIn = true;
            if (user.role === 'ADMIN') {
              this.authService.loggedInUser = user.role;
              this.router.navigate(['./admin']);
            } else if (user.role === 'TEACHER') {
              this.authService.loggedInUser = user.role;
              this.router.navigate(['./teacher']);
            } else {
              this.authService.loggedInUser = user.role;
              this.router.navigate(['./student']);
            }

          } else {
            this.authService.isloggedIn = false;
          }
        })
      }
    );
  }

  showPassClick() {
    this.show = !this.show;
  }

}
