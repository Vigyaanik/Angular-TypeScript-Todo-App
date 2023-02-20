import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserType } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersCheckService } from 'src/app/services/users-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.login.html',
  styleUrls: ['../../../assets/styles/app.component.login.css']
})
export class LoginComponent {
  title = 'my-app';

    showLoginForm = true;
    showRegisterForm = false;
    currentPage = 'login';
    public errorMessage: string = "";

    constructor(private router: Router, private usersService: UsersService, private usersCheckService: UsersCheckService) { }

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


    onSubmit2(form: NgForm){
      const username = form.value.username;
      const password = form.value.password;


      this.usersCheckService.checkUser(username, password).subscribe({
        next: () => {
          if (this.usersCheckService.isLoggedIn()) {
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = 'Invalid username or password';
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
    onSubmit(form: NgForm) {
      const newUser: User = {
        username: form.value.username,
        password: form.value.password,
        email: form.value.email
        // email: form.value.email,
        // userType: UserType.REGULAR
      };

      this.usersService.addUser(newUser).subscribe(
        (response) => {
          console.log(response);
          form.reset();
          this.showLoginForm = true;
          this.showRegisterForm = false;
          this.currentPage = 'login';
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
        }
      );
    }    
}