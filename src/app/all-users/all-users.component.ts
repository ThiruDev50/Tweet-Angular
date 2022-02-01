import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(){
   
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
