import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:AuthService, private route:Router,private firestore:AngularFirestore) { }

  ngOnInit(): void {
  }
register(f){ 
  //console.log(f.value)
  let data = f.value
   this.service.SignUp(data.email,data.password).then((user)=>{
    this.firestore.collection("users").doc(user.user.uid).set({
      fullName:data.fullName,
      email:data.email,
      uid:user.user.uid,
    
    }).then(()=>{
      alert ("Registration Successful")     
     //console.log("done")
     this.route.navigate(['/'])
    })
   }).catch(()=>{
    console.log("error")
   })
}
}
/*then((user)=>{
  this.firestore.collection("users").doc(user.user.uid).set({
    fullName:data.fullName,
    email:data.email,
    uid:user.user.uid,
  })-->*/
