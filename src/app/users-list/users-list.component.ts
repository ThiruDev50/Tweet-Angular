import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from '../utils/common.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() user: any;
  imagePath:any;
  isClicked:boolean=false
  UserBio:any
  constructor(private _sanitizer: DomSanitizer,private _common: CommonService) {
    
   }

  ngOnInit(): void {
   if(this.user.ProfilePictureBase64){
    this.imagePath=this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    + this.user.ProfilePictureBase64);
   }
   else{
    this.imagePath=this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    + this._common.maleDefaultProfileBase64);
   }
   if(!this.user.UserBio){
     this.UserBio="No Bio"
   }
   else{
    this.UserBio=this.user.UserBio
   }
  }
  doStuff(){
    this.isClicked=!this.isClicked
  }
  
}
