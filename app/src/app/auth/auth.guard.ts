import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersCheckService } from '../services/users-check.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: UsersCheckService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isLoggedIn().pipe(map(loggedIn => {
          if (loggedIn) {
              console.log("canActivate log in value");
              console.log(loggedIn);
              return true;
          } else {
              this.router.navigate(['/login']);
              return false;
          }
      }));
  }
  
}
