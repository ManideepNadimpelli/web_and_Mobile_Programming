import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {ViewEncapsulation} from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {

  public emailId: '';
  public password;
  public result: any;
  public loggedUser: string;

  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthenticationService, private router: Router,
              private formBuilder: FormBuilder, private appComponent: AppComponent) { }

  loginForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get f() { return this.loginForm.controls; }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const userData = {
      email: this.loginForm.value.email ,
      password: this.loginForm.value.password
    }

    this.authService.getUser(userData)
      .subscribe(res => {
        this.loggedUser = res.firstName;
        this.router.navigate(['/']);
      }, (err) => {
        Swal.fire({
          title: 'error',
          text: 'Error in login.Please Check your details',
          timer: 2000
        });
        console.log(err);
      });
  }
}
