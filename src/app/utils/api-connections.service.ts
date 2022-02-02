import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiConnectionsService implements OnInit {
  constructor(private http: HttpClient) {}
  public baseUrl = 'https://localhost:44333/api';

  public loginUrl = '/Login';
  public testUrl = 'https://jsonplaceholder.typicode.com/todos/';
  public localTest = 'https://localhost:44333/api/Register/GetUsers';
  public localPost = 'https://localhost:44333/api/Login';
  public editUrl = '/Register';
  public registerUrl = '/Register';
  public getAllUsersUrl = '/Register/GetAllUsers';
  public newTweetPost = '/Tweet/NewTweet';
  public allTweetsUrl = '/Tweet/AllTweet';
  public myTweetsUrl = '/Tweet/MyTweet';
  public forgotPasswordUrl = '/Login/ForgotPassword';
  public updatePasswordUrl = '/Login/UpdatePassword';
  public addCommentsUrl = '/Tweet/AddComment';
  public editMyTweetUrl = '/Tweet/EditMyTweet';
  public editMyCommentUrl = '/Tweet/EditMyComment';
public deleteMyPostUrl="/Tweet/DeleteMyTweet"
  ngOnInit(): void {}
  getData() {
    return this.http.get(this.localTest);
  }
  LoginPost(loginBody: any) {
    return this.http.post(this.baseUrl + this.loginUrl, loginBody);
  }
  RegisterPost(registerBody: any) {
    return this.http.post(this.baseUrl + this.registerUrl, registerBody);
  }
  EditDetailsPut(updateBody: any) {
    return this.http.put(this.baseUrl + this.editUrl, updateBody);
  }
  /* GetAllUsers():Observable<Object>{
    return this.http.get(this.baseUrl+this.getAllUsersUrl)
  } */
  NewTweetPost(tweetBody: any) {
    return this.http.post(this.baseUrl + this.newTweetPost, tweetBody);
  }
  GetAllTweets() {
    return this.http.get(this.baseUrl + this.allTweetsUrl);
  }
  GetMyTweets(UserId: any) {
    return this.http.post(this.baseUrl + this.myTweetsUrl, UserId);
  }
  CheckValidUser(FpBody: any) {
    return this.http.post(this.baseUrl + this.forgotPasswordUrl, FpBody);
  }
  UpdatePassword(UpBody: any) {
    return this.http.post(this.baseUrl + this.updatePasswordUrl, UpBody);
  }
  AddComment(commentBody: any) {
    return this.http.put(this.baseUrl + this.addCommentsUrl, commentBody);
  }
  EditMytweet(editMyTweetBody: any) {
    return this.http.put(this.baseUrl + this.editMyTweetUrl, editMyTweetBody);
  }
  EditMyComment(editMyCommentBody: any) {
    return this.http.put(this.baseUrl + this.editMyCommentUrl,editMyCommentBody);
  }
  DeleteMyTweet(deleteBody:any){
    return this.http.delete(this.baseUrl + this.deleteMyPostUrl,deleteBody);

  }
}
