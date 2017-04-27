import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SearchItemsService} from "../../search-items.service";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  constructor(private searchItemsService: SearchItemsService,
              private auth: AuthService,
              private router: Router ) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    const userDetails = { email: email, password: password};
    this.searchItemsService.sendServerRequest(userDetails, '/sign_in').subscribe(
      (response) => {
        console.log(response);
        if(response && response.token){
          this.searchItemsService.userToken = response.token;
          this.auth.login();
          this.router.navigate(['/add_track']);
        }

      }
    );

  }

}
