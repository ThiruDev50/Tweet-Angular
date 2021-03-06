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
  isLoading: boolean = false;
  isClicked: boolean = false;
  likeBtnColor: any = 'black';
  constructor() {
    this.isLoading = true;
  }
  ngOnInit(): void {}
  likeButtonClicked() {
    if (!this.isClicked) {
      this.likeBtnColor = 'warn';
    }
    else{
      this.likeBtnColor = 'black';
    }
    this.isClicked = !this.isClicked;
  }
}
