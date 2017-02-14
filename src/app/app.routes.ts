/**
 * Created by Amin on 14/02/2017.
 */
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {AuthGuardService} from "./login/auth-guard.service";
import {RouterModule} from "@angular/router";

export const APP_ROUTES = RouterModule.forRoot([
  {path: '',      component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
]);
