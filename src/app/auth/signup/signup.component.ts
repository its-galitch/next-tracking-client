import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {formArrayNameProvider} from "@angular/forms/src/directives/reactive_directives/form_group_name";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSignup(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }

}
