import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { response } from 'express';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersCheckService {

  
  private baseUrl = 'http://localhost:8080/api/users';
  private loggedIn = false;
  constructor(private http: HttpClient, private router: Router) { }

  checkUser(username: string, password: string) {
    const url = `${this.baseUrl}/${username}/${password}`;
    return this.http.get<User>(url).pipe(
      tap(user => {
        if (user) {
          this.loggedIn = true;
        }
      })
    );
  }

  logout(): void {
    console.log(this.loggedIn);
    this.loggedIn = false;
    this.router.navigate(['/add-job']);
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.loggedIn);
  }
}