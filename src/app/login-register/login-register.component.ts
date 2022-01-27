import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from  '@angular/material/dialog';
import swal from 'sweetalert';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  
  
  formGroupReg!: FormGroup;
  public loginBtn= true;
  submitted = false;
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    
  });

  constructor(private formBuilder: FormBuilder,private  dialogRef : MatDialog) { }
  

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp') as HTMLElement;
    const signInButton = document.getElementById('signIn') as HTMLElement;
    const container = document.getElementById('container') as HTMLElement;
    
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      },
      
    );
    this.initRegister()
  }//onInit finish
  loginProcess(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  initRegister(){
   this.formGroupReg=new FormGroup({
    nameReg: new FormControl('',[Validators.required]),
    contactNumberReg: new FormControl('',[Validators.required]),
    genderReg: new FormControl('',[Validators.required]),
    emailReg: new FormControl('',[Validators.required]),
    passwordReg: new FormControl('',[Validators.required]),
    confirmPasswordReg: new FormControl('',[Validators.required]),

   })
  }
  registerProcess(){
    if(this.formGroupReg.value.nameReg.length==0){
      swal("Oops!", "Name should not be empty");
    }
    else if(this.formGroupReg.value.contactNumberReg.toString().length!=10){
      swal("Oops!", "Phone number length should be 10");
    }
    else if(this.formGroupReg.value.genderReg!="Male"||this.formGroupReg.value.genderReg!="female"){
      swal("Oops!", "Please select gender from drop down");
    }
    else if(!this.formGroupReg.value.emailReg.includes("@")){
      swal("Oops!", "Enter valid mail Id");
    }
    else if(this.formGroupReg.value.passwordReg==""){
      swal("Oops!", "Password cannot empty");
    }
    else if(this.formGroupReg.value.passwordReg!=this.formGroupReg.value.confirmPasswordReg){
      swal("Oops!", "Password is not matching");
    }
    else{
      //Api connection
      swal( "Registration successful","Redirecting in few seconds", "success");
      setTimeout(()=>{                           
      window.location.reload();
   }, 3500);
    }
  }


}
