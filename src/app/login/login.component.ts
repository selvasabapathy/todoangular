import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = 'selva'
  password : string = '';

  invalidLogin : boolean = false;
  errorMessage : string = 'Invalid credential';

  constructor(private router : Router, private authService : HardcodedAuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.authService.authenticate(this.username, this.password)) {
      this.invalidLogin= false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

}
