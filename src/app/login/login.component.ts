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

  countrySelected="India";
  citySelected="";


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void {

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(!emailRegex.test(this.username.toLowerCase()))
    {

        alert("Please Enter Valid Email");
        return;

    }

    if(this.password.length<8)
    {
      alert("Please Enter Password Of Length of Atleast 8");
      return;
    }

    alert("Logged In Successfully");



  }

}
