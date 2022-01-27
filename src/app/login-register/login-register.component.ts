import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  formGroup!: FormGroup;
  constructor() {
    console.log('ooooooo');
  }

  ngOnInit(): void {
    //for Sliding animation in login/register page
    let img__btn= document.querySelector('.img__btn') as HTMLElement
    let cont=document.querySelector('.cont') as HTMLElement
    if(document.querySelector('.img__btn')!=null){
      img__btn.addEventListener('click', function() {
        cont.classList.toggle('s--signup');
    });
    }
    
    this.initForm()
  }
  initForm(){
    this.formGroup=new FormGroup({
      userName:new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      contactNumber: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required])

    })
  }
  loginProcess(){
    console.log(this.formGroup.value)
  }

}
