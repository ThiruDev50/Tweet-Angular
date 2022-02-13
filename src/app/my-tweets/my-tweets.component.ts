import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiConnectionsService } from '../utils/api-connections.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.css']
})
export class MyTweetsComponent implements OnInit {
formdata:any;
myTweets:any;
isLoading:boolean=true;
isNoTweets:boolean=false;
  constructor(private apiConnection:ApiConnectionsService) { 

  }

  ngOnInit(): void {

    this.formdata = new FormGroup({ 
      UserId: new FormControl(localStorage.getItem("UserId")),
     
   }); 
try{
  this.apiConnection.GetMyTweets(this.formdata.value).subscribe(data=>{
  this.isLoading=false
  if(data==""){
    this.isNoTweets=true
  }
    this.myTweets=data
  },
      (error) => {
        swal(
          'Failed to connect with DB',
          'Probably API is not running',
          'warning'
        );
      })
}
catch{
  swal('Oops Something wrong!!Pleasse try again later');
}
    
  }

}
