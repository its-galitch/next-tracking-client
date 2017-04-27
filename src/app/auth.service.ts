import { Injectable } from '@angular/core';
import {SearchItemsService} from "./search-items.service";

@Injectable()
export class AuthService {
  loggedIn = false;

  constructor(private searchService: SearchItemsService){}

  isAuthenticated(){
    const  promise = new Promise(
        (resolve, reject ) => {
          // setTimeout(() =>{
          //   resolve(this.loggedIn)
          // }, 800);
          resolve(this.loggedIn)
        });
    return promise;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn =  false;
    this.searchService.userToken = '';
  }


}
