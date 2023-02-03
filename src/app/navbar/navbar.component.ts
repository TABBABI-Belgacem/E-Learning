import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 usr_exist
  constructor(private af:AngularFireAuth, private route:Router , private service:AuthService) {
    this.service.user.subscribe(user=>{ 
      if(user){
        this.usr_exist=true }
        else {
        this.usr_exist=false
        }
      

    })
   }

  ngOnInit(): void {
  }
logout(){
this.af.signOut().then(()=>{
  //console.log("logout done")
  this.route.navigate(['/login'])
}).catch(()=>{
  console.log("error logout")
})
}
}
