import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterErrorPopupComponent } from '../Pop-Ups/register-error-popup/register-error-popup.component';
import swal from 'sweetalert';
import { ApiConnectionsService } from '../utils/api-connections.service';
import * as _ from 'lodash';
import { Observable, ReplaySubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { CommonService } from '../utils/common.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
  
 
  public isNewTweet = false;
  public isMyTweets = false;
  public isAllTweets = false;
  public isAllUsers = false;
  public iseditAccount = false;

  constructor(private router: Router) {
    if (window.location.pathname == '/newTweet') {
      this.isNewTweet = true;
      this.isMyTweets = false;
      this.isAllTweets = false;
      this.isAllUsers = false;
      this.iseditAccount = false;
    }
    if (window.location.pathname == '/myTweets') {
      this.isNewTweet = false;
      this.isMyTweets = true;
      this.isAllTweets = false;
      this.isAllUsers = false;
      this.iseditAccount = false;
    } else if (window.location.pathname == '/allTweets') {
      this.isNewTweet = false;
      this.isMyTweets = false;
      this.isAllTweets = true;
      this.isAllUsers = false;
      this.iseditAccount = false;
    } else if (window.location.pathname == '/allUsers') {
      this.isNewTweet = false;
      this.isMyTweets = false;
      this.isAllTweets = false;
      this.isAllUsers = true;
      this.iseditAccount = false;
    } else if (window.location.pathname == '/editAccount') {
      this.isNewTweet = false;
      this.isMyTweets = false;
      this.isAllTweets = false;
      this.isAllUsers = false;
      this.iseditAccount = true;
    }
  }

  flipped:any;

 

  ngOnInit() {
    this.flipped = false;
  }
}
