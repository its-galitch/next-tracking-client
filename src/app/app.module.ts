import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {SearchItemsService} from "./search-items.service";
import {ResultItemComponent} from "./flask-api/result-item/result-item.component";
import {AddSearchComponent} from "./flask-api/add-search/add-search.component";
import {CheckIdBarComponent} from "./flask-api/id-check.component";
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {MySiteRouting} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import {DataService} from "./data.service";
import { SendToTrackingComponent } from './send-to-tracking/send-to-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckIdBarComponent,
    AddSearchComponent,
    ResultItemComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    SendToTrackingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MySiteRouting
  ],
  providers: [
    SearchItemsService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
