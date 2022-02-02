import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import  swal from 'sweetalert';
import { ApiConnectionsService } from '../utils/api-connections.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formdata:any;
isUpdate:boolean=false
UpdateFormdata:any;
currentMailId:any;
  constructor(private apiConnection:ApiConnectionsService,private router: Router,) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({ 
      MailId: new FormControl(''),
      ContactNumber: new FormControl(''),
   }); 
   this.UpdateFormdata = new FormGroup({ 
    MailId: new FormControl(''),
    Password: new FormControl(''),
 }); 
  }
  checkDetails(dataBody:any){
    try{
this.apiConnection.CheckValidUser(this.formdata.value).subscribe(data=>{
  if(data=="UnAuthorized"){
     swal('Oops! Wrong credentials', 'Try again', 'warning');
  }
  else{
    this.currentMailId=this.formdata.value.MailId
    this.isUpdate=true
  }

})
    }
    catch{
      swal('Oops! Something went wrong', 'Try again', 'warning');
    }
  }
  UpdatePassword(dataBody:any){
    
      if(this.UpdateFormdata.value.MailId!=this.currentMailId){
        swal('Try with your Mail Id', 'Try again', 'warning');
     }
     else{
       try{
        this.apiConnection.UpdatePassword(this.UpdateFormdata.value).subscribe(data=>{
        //  console.log(this.UpdateFormdata.MailId)
        //  console.log(this.currentMailId)
        if(data=="Updated successfully"){
          swal(
            'Password updated successful',
            'Redirecting in few seconds',
            'success'
          );
          setTimeout(() => {
            this.router.navigate(['Login']);
          }, 3500);
        }
        })
       }
       catch{
        swal('Oops! Something went wrong', 'Try again', 'warning')
       }
     }
     
          
          
  }

}
