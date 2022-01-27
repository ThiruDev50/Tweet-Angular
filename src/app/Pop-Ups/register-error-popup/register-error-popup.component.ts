import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-register-error-popup',
  templateUrl: './register-error-popup.component.html',
  styleUrls: ['./register-error-popup.component.css']
})
export class RegisterErrorPopupComponent implements OnInit {

  firstName;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.firstName = data.name
  }

  ngOnInit(): void {
  }

}
