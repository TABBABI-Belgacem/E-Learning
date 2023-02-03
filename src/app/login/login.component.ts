import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

messageerror
  constructor(private service:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
login(f){
  let data=f.value
  //console.log(f.value)
 return this.service.SignIn(data.email,data.password).then(()=>{
 //console.log("success login")
 alert ("Login Successful")
  this.route.navigate(['/'])
 
 }).catch(()=>{
//console.log("login failed")
this.messageerror="Incorrect email and password"
 })
}
}
