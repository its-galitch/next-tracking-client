import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {


  constructor(public auth: AuthService, private router: Router) { }

  onLogOut(){
    this.auth.logout();
    this.router.navigate(['signin']);
  }

  onSignIn(){
    this.router.navigate(['signin'])
  }

  onSignUp(){
    this.router.navigate(['signup'])
  }

  ngOnInit() {
  }

}
