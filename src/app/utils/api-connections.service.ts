import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionsService implements OnInit {

  constructor(private http:HttpClient){}
    public baseUrl="https://localhost:44333/api"

    public loginUrl="/Login"
    public testUrl="https://jsonplaceholder.typicode.com/todos/"
    public localTest="https://localhost:44333/api/Register/GetUsers"
    public localPost="https://localhost:44333/api/Login"
    public editUrl="/Register"
    public login={
      "mailId":"test@gmail.com",
      "password":"test"
    }
    public registerUrl="/Register"
  ngOnInit(): void {
  }
  getData(){
    return this.http.get(this.localTest)
  }
  LoginPost(loginBody: any){
    return this.http.post(this.baseUrl+this.loginUrl,loginBody)
  }
  RegisterPost(registerBody:any){
    return this.http.post(this.baseUrl+this.registerUrl,registerBody)
  }
  EditDetailsPut(updateBody:any){
    return this.http.put(this.baseUrl+this.editUrl,updateBody)
  }
}
