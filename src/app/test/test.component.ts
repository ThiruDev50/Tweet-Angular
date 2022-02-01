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

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
  
 
  constructor(private apiService:ApiConnectionsService,private commonSer :CommonService){
    this.apiService.GetAllUsers().subscribe(data=>{
      this.apiData=data
      
      })
  }
  apiData:any={}
  ngOnInit(): void {
    fetch('https://localhost:44333/api/Register/GetAllUsers')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
    
  }
  columnDefs = [
    {headerName: 'UserId', field: 'UserId'},
    {headerName: 'UserName', field: 'UserName'},
    {headerName: 'MailId', field: 'MailId'},
    {headerName: 'Gender', field: 'Gender'},
];
rowData =[]

}
