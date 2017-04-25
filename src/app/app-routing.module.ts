/**
 * Created by יצחק ושרה on 23/04/2017.
 */

import {RouterModule, Routes} from "@angular/router";
import {CheckIdBarComponent} from "app/flask-api/id-check.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {HomeComponent} from "./home/home.component";


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add_track', component: CheckIdBarComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}

];

export const MySiteRouting = RouterModule.forRoot(APP_ROUTES);
