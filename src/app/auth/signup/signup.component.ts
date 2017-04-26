import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {formArrayNameProvider} from "@angular/forms/src/directives/reactive_directives/form_group_name";
import {SearchItemsService} from "../../search-items.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(private searchItemsService: SearchItemsService) { }

  ngOnInit() {
  }

  onSignup(form:NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const userDetails =
        {
          name:name,
          email: email,
          password: password
        };
    this.searchItemsService.userToken = 'I am a token from Sign Up';

    this.searchItemsService.sendServerRequest(userDetails, '/add_new_user')
        .subscribe(
            (response)=> {
              console.log(response);
              console.log(response.token);
              this.searchItemsService.userToken = response.token;
            });
  }

}
