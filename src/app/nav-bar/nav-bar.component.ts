import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public isNewTweet = false;
  public isMyTweets = false;
  public isAllTweets = false;
  public isAllUsers = false;
  public iseditAccount = false;

  constructor(private router: Router) {
    if (window.location.pathname == '/newTweet') {
      this.isNewTweet = true;
      this.isMyTweets = false;
      this.isAllTweets = false;
      this.isAllUsers = false;
      this.iseditAccount = false;
    }
    if (window.location.pathname == '/myTweets') {
      this.isNewTweet = false;
      this.isMyTweets = true;
      this.isAllTweets = false;
      this.isAllUsers = false;
      this.iseditAccount = false;
    } else if (window.location.pathname == '/allTweets') {
      this.isNewTweet = false;
      this.isMyTweets = false;
      this.isAllTweets = true;
      this.isAllUsers = false;
      this.iseditAccount = false;
    } else if (window.location.pathname == '/allUsers') {
      this.isNewTweet = false;
      this.isMyTweets = false;
      this.isAllTweets = false;
      this.isAllUsers = true;
      this.iseditAccount = false;
    } else if (window.location.pathname == '/editAccount') {
      this.isNewTweet = false;
      this.isMyTweets = false;
      this.isAllTweets = false;
      this.isAllUsers = false;
      this.iseditAccount = true;
    }
  }

  ngOnInit(): void {}

  logout() {
   // console.log('logout clicked');
    localStorage.clear()
    this.router.navigate(['Login']);
  }
}
