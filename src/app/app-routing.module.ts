import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MyTweetsComponent } from './my-tweets/my-tweets.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{path:'test', component:TestComponent},
{path:'',component:LandingPageComponent},
{path:'Login',component:LoginRegisterComponent},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path:'newTweet',component:NewTweetComponent},
{path:'myTweets',component:MyTweetsComponent},
{path:'allTweets',component:AllTweetsComponent},
{path:'allUsers',component:AllUsersComponent},
{path:'editAccount',component:EditAccountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
