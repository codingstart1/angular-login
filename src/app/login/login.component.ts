import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { LoginService } from './login.service';
import { LoginModel } from './login.model';
import { Router } from '@angular/router';
import { LoaderService } from '../utils/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _loginService: LoginService,
    private toast: ToastService,
    private router: Router,
    private _loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  validationLoginForm() {
    let isValid = true;

    if (!this.loginForm.value.username) {
      isValid = false;
      this.toast.warn("Username is required");
    }

    if (!this.loginForm.value.password) {
      isValid = false;
      this.toast.warn("Password is required");
    }

    return isValid
  }

  loginFn() {
    // We need to create login service to include HTTpClientModule Services
    // we need to implement validation method to check username and password

    if (this.validationLoginForm()) {

      // we need to start loader in case data is filled
      this._loaderService.showLoader();
      let userLoginBody: LoginModel = this.loginForm.value;
      this._loginService.login(userLoginBody).subscribe(res => {

        // we need to hide loader in case data is retrieved
        this._loaderService.hideLoader();
        // we need to store response and navigate to profile page
        // we need to convert respone to string to setItem in sessions
        
        sessionStorage.setItem('userData', JSON.stringify(res));
        this.router.navigate(['/profile']);
      });
    }
  }


}
