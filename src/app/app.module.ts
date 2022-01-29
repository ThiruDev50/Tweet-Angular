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
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TestComponent,
    NavBarComponent,
    LoginRegisterComponent,
    ForgotPasswordComponent,
    RegisterErrorPopupComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
