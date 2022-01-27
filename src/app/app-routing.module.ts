import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
{path:'test', component:TestComponent},
{path:'',component:LandingPageComponent},
{path:'Login',component:LoginRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
