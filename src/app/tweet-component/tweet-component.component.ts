import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { ApiConnectionsService } from '../utils/api-connections.service';

@Component({
  selector: 'app-tweet-component',
  templateUrl: './tweet-component.component.html',
  styleUrls: ['./tweet-component.component.css'],
})
export class TweetComponentComponent implements OnInit {
  @Input() tweet: any;
  imagePath: any;
  commentorimagePath: any;
  formEditPost: any;
  formEditComment: any;
  formNewComment: any;
  UserName: any;
  tweetCreatedTime: any;
  tweetCreatedDMY: any;
  tweetContent: any;
  commentorContent: any;
  commentorUserName: any;
  isMyPostEdit: boolean = false;
  isMyCommentEdit: boolean = false;
  isSameUser: boolean = false;
  isSameCommentUser: boolean = false;
  showComment: boolean = false;
  PostDelete: any;
  constructor(
    private _sanitizer: DomSanitizer,
    private apiConnection: ApiConnectionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //console.log(1,this.tweet)
    if (this.tweet.UserId == localStorage.getItem('UserId')) {
      this.isSameUser = true;
    }

    this.commentorimagePath = this._sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/jpg;base64,' + this.tweet.CommentorProfilePictureBase64
    );
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/jpg;base64,' + this.tweet.ProfilePictureBase64
    );
    this.UserName = this.tweet.UserName;
    this.tweetCreatedTime = this.tweet.TweetCreatedTime;
    this.tweetCreatedDMY = this.tweet.TweetCreatedDMY;
    this.tweetContent = this.tweet.TweetContent;
    this.commentorUserName = this.tweet.CommentorUserName;
    if (this.tweet.CommentorUserId == localStorage.getItem('UserId')) {
      this.isSameCommentUser = true;
    }
    //console.log(this.tweet.CommentorUserId, localStorage.getItem('UserId'));

    if (this.tweet.CommentorContent != '') {
      this.showComment = true;
      this.commentorContent = this.tweet.CommentorContent;
    } else {
      this.showComment = false;

      this.formNewComment = new FormGroup({
        tweetId: new FormControl(this.tweet.TweetId),
        userId: new FormControl(this.tweet.UserId),
        userName: new FormControl(this.tweet.UserName),
        profilePictureBase64: new FormControl(this.tweet.ProfilePictureBase64),
        tweetContent: new FormControl(this.tweet.TweetContent),
        commentorUserName: new FormControl(localStorage.getItem('UserName')),
        commentorUserId: new FormControl(localStorage.getItem('UserId')),
        commentorContent: new FormControl(),
        commentorProfilePictureBase64: new FormControl(
          localStorage.getItem('ProfilePictureBase64')
        ),
        tweetCreatedTime: new FormControl(this.tweet.TweetCreatedTime),
        tweetCreatedDMY: new FormControl(this.tweet.TweetCreatedDMY),
      });
    }
  }
  addComment(commentData: any) {
    this.apiConnection.AddComment(this.formNewComment.value).subscribe(
      (data) => {
        swal(
          'Comment added successfully',
          'Redirecting in few seconds',
          'success'
        );
        setTimeout(() => {
          window.location.reload();
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
  }
  editMyComment() {
    this.isMyCommentEdit = true;
    this.formEditComment = new FormGroup({
      tweetId: new FormControl(this.tweet.TweetId),
      commentorContent: new FormControl(this.tweet.CommentorContent),
    });
  }
  editComment(editCommentBody: any) {
    this.apiConnection.EditMyComment(this.formEditComment.value).subscribe(
      (data) => {
        // console.log(data);
        if (data == 'Comment Edited') {
          swal(
            'Comment edited successfully',
            'Redirecting in few seconds',
            'success'
          );
          setTimeout(() => {
            window.location.reload();
          }, 3500);
        } else {
          swal('Not Updated', 'try again', 'warning');
        }
      },
      (error) => {
        swal(
          'Failed to connect with DB',
          'Probably API is not running',
          'warning'
        );
      }
    );
  }
  editMyPost() {
    // console.log('edit my post clicked');
    this.isMyPostEdit = true;
    this.formEditPost = new FormGroup({
      tweetId: new FormControl(this.tweet.TweetId),
      tweetContent: new FormControl(this.tweet.TweetContent),
    });
  }
  editPost(editPostBody: any) {
    //  console.log('edited post', this.formEditPost.value);
    this.apiConnection.EditMytweet(this.formEditPost.value).subscribe(
      (data) => {
        //   console.log(data);
        if (data == 'Post Edited') {
          swal(
            'Post edited successfully',
            'Redirecting in few seconds',
            'success'
          );
          setTimeout(() => {
            window.location.reload();
          }, 3500);
        } else {
          swal('Not Updated', 'try again', 'warning');
        }
      },
      (error) => {
        swal(
          'Failed to connect with DB',
          'Probably API is not running',
          'warning'
        );
      }
    );
  }
  CancelEditMyPost() {
    this.isMyPostEdit = false;
  }
  CancelEditMyComment() {
    this.isMyCommentEdit = false;
  }
  del: any;
  /* deleteMyPost() {
    this.PostDelete = new FormGroup({
      TweetId: new FormControl(this.tweet.TweetId),
    });
    console.log('Hiii', this.PostDelete.value);
    this.del = {
      TweetId: this.tweet.TweetId,
    };
    console.log('this.del');
    this.apiConnection.DeleteMyTweet(this.PostDelete.value).subscribe(
      (data) => {
        console.log(data);

        swal(
          'Post edited successfully',
          'Redirecting in few seconds',
          'success'
        );
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      },
      (error) => {
        console.log(error);
        swal(
          'Failed to connect with DB',
          'Probably API is not running',
          'warning'
        );
      }
    );
  } */
}
