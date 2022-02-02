import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiConnectionsService } from '../utils/api-connections.service';
import swal from 'sweetalert';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  imagePath: any;
  formdata:any;
  isLoading:boolean=false
  isNotLoading:boolean=true
public userDetails:any={
  "MailId":"",
  'ContactNumber':"",
  "Gender":"",
  "Password":"",
  "ProfilePictureBase64":"",
  "UserId":"",
  "UserName":""
}
public ProfilePictureBase64:any
    
    constructor(private _sanitizer: DomSanitizer,private apiConnection: ApiConnectionsService,private router: Router) { 
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + localStorage.getItem("ProfilePictureBase64"));
  }
  ngOnInit(): void {
    //this.ProfilePictureBase64=localStorage.getItem("ProfilePictureBase64")
    
    

                 this.formdata = new FormGroup({ 
                  MailId: new FormControl(localStorage.getItem("MailId")),
                  ContactNumber: new FormControl(localStorage.getItem("ContactNumber")),
                  Gender: new FormControl(localStorage.getItem("Gender")),
                  Password: new FormControl(localStorage.getItem("Password")),
                  ProfilePictureBase64: new FormControl(this.sellersPermitString),
                  UserId: new FormControl(localStorage.getItem("UserId")),
                  UserName: new FormControl(localStorage.getItem("UserName")),
               }); 
  }
  
  sellersPermitFile: any;
  //base64s
  sellersPermitString: any=localStorage.getItem("ProfilePictureBase64");
  //json
  public picked(event: any, field: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      if (field == 1) {
        this.sellersPermitFile = file;
        this.handleInputChange(file); //turn into base64
      }
    } else {
      alert('No file selected');
    }
  }
  handleInputChange(files: any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    this.sellersPermitString = base64result;
   // console.log('1', this.sellersPermitString);
  this.ProfilePictureBase64=this.sellersPermitString
   // console.log("Yessss",this.formdata.ProfilePictureBase64)
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + this.sellersPermitString);

  }
  editDetails(data:any){
    try {
  this.formdata.patchValue({"ProfilePictureBase64":this.sellersPermitString})
 // console.log(this.formdata)
      this.apiConnection.EditDetailsPut(this.formdata.value).subscribe(
        (data) => {
          swal(
            'edited successful',
            'Redirecting in few seconds',
            'success'
          );
          setTimeout(() => {
            this.router.navigate(['newTweet']);
          }, 3500);
          
        },
        (error) => {
          swal(
            'Failed to connect with DB',
            'Probably API is not running',
            'warning'
          );
        }
      );
    } catch {
      swal('Oops Something wrong!!Pleasse try again later');
    }
  }
  
}
