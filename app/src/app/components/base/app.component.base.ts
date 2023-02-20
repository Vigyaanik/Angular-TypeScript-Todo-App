import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserType } from '../../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.base.html',
  styleUrls: ['../../../assets/styles/app.component.login.css']
})

export class BaseComponent {
  title = 'my-app';

  constructor(private router: Router) {
    
    this.router.navigate(['/home']);
  };

}