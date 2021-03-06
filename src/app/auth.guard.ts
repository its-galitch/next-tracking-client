import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./auth.service";
import {SearchItemsService} from "./search-items.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private searchItemsService: SearchItemsService){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
        .then(
            (authenticated:boolean) => {
              if (authenticated){
                return true;
              }else {
                return false;
              }
            }
        );
  }
}
