import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import swal from 'sweetalert';
import { ApiConnectionsService } from '../utils/api-connections.service';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css'],
})
export class NewTweetComponent implements OnInit {
  currentDate = new Date();
  cDay = this.currentDate.getDate();
  cMonth = this.currentDate.getMonth() + 1;
  cYear = this.currentDate.getFullYear();
  cHour=this.currentDate.getHours() 
  cMin=this.currentDate.getMinutes()
  tweetCreatedPeriodString=this.cHour+":"+this.cMin
  tweetCreatedDMY=this.cDay+"/"+this.cMonth+"/"+this.cYear
  formdata: any;
  tweetBody = {
    UserName: localStorage.getItem('UserName'),
    UserId: localStorage.getItem('UserId'),
    ProfilePictureBase64: localStorage.getItem('ProfilePictureBase64'),
    TweetContent: '',
    CommentorUserName: '',
    CommentorUserId: '',
    CommentorContent: '',
    CommentorProfilePictureBase64: '',
  };
  constructor(private apiConnection: ApiConnectionsService) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      TweetContent: new FormControl(''),
      ProfilePictureBase64: new FormControl(
        localStorage.getItem('ProfilePictureBase64')
      ),
      UserName: new FormControl(localStorage.getItem('UserName')),
      UserId: new FormControl(localStorage.getItem('UserId')),
      CommentorUserName: new FormControl(''),
      CommentorUserId: new FormControl(''),
      CommentorContent: new FormControl(''),
      CommentorProfilePictureBase64: new FormControl(''),
      TweetCreatedTime:new FormControl(this.tweetCreatedPeriodString),
      TweetCreatedDMY:new FormControl(this.tweetCreatedDMY)
    });
    
  }
  editDetails(dataBody: any) {
    //this.formdata.patchValue({"ProfilePictureBase64":"probil;e bahi"})
    this.apiConnection.NewTweetPost(this.formdata.value).subscribe((data) => {
      swal(
        'New Tweet added ',
        'Redirecting in few seconds',
        'success'
      );
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    },error=>{
      swal(
        'Failed to connect with DB',
        'Probably API is not running',
        'warning'
      );
    });
  }
}
