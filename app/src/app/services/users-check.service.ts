import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { response } from 'express';
import { Router } from '@angular/router';

export interface ApiResponse {
  success: boolean;
  data: any;
}
@Injectable({
  providedIn: 'root'
})


export class UsersCheckService {

  
  private baseUrl = 'http://localhost:8080/api/users';
  private loggedIn = false;
  constructor(private http: HttpClient, private router: Router) { }

  checkUser(username: string, password: string): Observable<ApiResponse> {
    const url = `${this.baseUrl}/${username}/${password}`;
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    return this.http.get<ApiResponse>(url).pipe(
      tap(response => {
        console.log(response);
        if (response.success) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
        console.log(url);
        console.log(this.loggedIn);
      })
    );
  }

  logout(): void {
    console.log(this.loggedIn);
    this.loggedIn = false;
    this.router.navigate(['/add-job']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}