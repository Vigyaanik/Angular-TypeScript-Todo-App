import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserType } from '../../models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.login.html',
  styleUrls: ['../../../assets/styles/app.component.login.css']
})
export class LoginComponent {
  title = 'my-app';

//   constructor() { }

//   user: User = new User(1, 'admin', 'admin', UserType.Admin);

    showLoginForm = true;
    showRegisterForm = false;
    currentPage = 'login';

    showLogin() {
    this.showLoginForm = true;
    this.showRegisterForm = false;
    this.currentPage = 'login';
    }

    showRegister() {
    this.showLoginForm = false;
    this.showRegisterForm = true;
    this.currentPage = 'register';
    }
}