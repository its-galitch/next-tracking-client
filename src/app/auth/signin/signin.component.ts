import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SearchItemsService} from "../../search-items.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  constructor(private searchItemsService: SearchItemsService ) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    const userDetails = { email: email, password: password};
    this.searchItemsService.sendServerRequest(userDetails, '/sign_in').subscribe(
      (response) => {
        console.log(response);
        this.searchItemsService.userToken = response.token;
      }
    );

  }

}
