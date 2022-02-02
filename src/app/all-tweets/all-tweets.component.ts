import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert';

import { ApiConnectionsService } from '../utils/api-connections.service';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.css']
})
export class AllTweetsComponent implements OnInit {
isLoading:boolean=false
allTweets:any
  constructor(private apiConnection:ApiConnectionsService) { 

  }

  ngOnInit(): void {
    this.isLoading=true
    try{
      this.apiConnection.GetAllTweets().subscribe(data=>{
        this.allTweets=data
      //  console.log("allusers tweets",data)
      },error=>{
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
    this.isLoading=false

    
  }

}
