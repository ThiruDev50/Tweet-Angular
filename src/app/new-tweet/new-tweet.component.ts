import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    console.log('day', this.cDay);
    console.log('month', this.cMonth);
    console.log('Year', this.cYear);
    console.log('Hour', this.cHour);
    console.log('Min', this.cMin);
  }
  editDetails(dataBody: any) {
    //this.formdata.patchValue({"ProfilePictureBase64":"probil;e bahi"})
    this.apiConnection.NewTweetPost(this.formdata.value).subscribe((data) => {
      console.log(this.formdata)
      console.log(data);
    });
  }
}
