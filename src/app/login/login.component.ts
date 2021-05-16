import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  
  countries = ["India","U.K","U.S.A"];

  cities = {
    "India":["Hyderabad","Pune","Mumbai"],
    "UK":["London","Manchester","Liverpool"],
    "USA":["Los Angeles","New York","Chicago"]
  }


  citySelected="";


  constructor() { }

  ngOnInit(): void {
  }


  log(x:any)
  {
    console.log(x);
  }
  onSubmit(f: any){

    
    alert("Login Successful");
    


  }

}
