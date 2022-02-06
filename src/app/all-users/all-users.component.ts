import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
isLoading:boolean=true

allUsers:any
  constructor(private http: HttpClient){
    this.http.get('https://localhost:44333/api/Register/GetAllUsers').subscribe(data=>{
      this.isLoading=false
      this.allUsers=data
      console.log(this.allUsers)
    })
  }
  apiData:any={}
  ngOnInit(): void {
    this.isLoading=true
    
    
  }
  columnDefs = [
    /* {headerName: 'UserId', field: 'UserId',cellStyle: {maxWidth: 1200}},
    {headerName: 'UserName', field: 'UserName',cellStyle: { maxWidth: 1200}},
    {headerName: 'MailId', field: 'MailId',cellStyle: { maxWidth: 120}},
    {headerName: 'Gender', field: 'Gender',cellStyle: { maxWidth: 120}}, */


    {headerName: 'UserId', field: 'UserId',resizable: true,cellStyle: {width:'300px',left:'90px',height:"50px"},headerCellClass:{width:"200px",left:'90px'}},
    {headerName: 'UserName', field: 'UserName',resizable: true,cellStyle: { width:'300px',left:'300px',height:"50px"},headerClass:['header']},
    {headerName: 'MailId', field: 'MailId',resizable: true,cellStyle: { width:'300px',left:'600px',height:"50px"},headerClass:['header']},
    {headerName: 'Gender', field: 'Gender',resizable: true,cellStyle: { width:'300px',left:'900px',height:"50px"},headerClass:['header']},
];
rowData =[]

}
