import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {AuthService} from "./auth.service";
import {RestService} from "./rest.service";
import {LoggedInGuard} from "./login/logged-in.guard";
import {RouterModule} from "@angular/router";
import 'hammerjs';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FocusDirective} from './focus.directive';
import {MessageService} from "./message.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule, MdCheckboxModule, MdSnackBarModule, MdInputModule, MdToolbarModule,
    MdCardModule, MdIconModule
} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        HomeComponent,
        FocusDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdSnackBarModule,
        MdInputModule,
        MdToolbarModule,
        MdCardModule,
        MdIconModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
        ]),
    ],
    providers: [AuthService, RestService, LoggedInGuard, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
