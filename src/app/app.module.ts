import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterErrorPopupComponent } from './Pop-Ups/register-error-popup/register-error-popup.component';
import {HttpClientModule} from '@angular/common/http'
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { MyTweetsComponent } from './my-tweets/my-tweets.component';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TestComponent,
    NavBarComponent,
    LoginRegisterComponent,
    ForgotPasswordComponent,
    RegisterErrorPopupComponent,
    NewTweetComponent,
    MyTweetsComponent,
    AllTweetsComponent,
    AllUsersComponent,
    EditAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    AlifeFileToBase64Module,
    AgGridModule.withComponents(null),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
