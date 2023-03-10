import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user:Observable<firebase.User>;
 
  constructor(private fa:AngularFireAuth) { 
    this.user=this.fa.user
  }
   SignUp (email,password){
     return this.fa.createUserWithEmailAndPassword(email,password)

   }
  SignIn(email,password){
    return this.fa.signInWithEmailAndPassword(email,password)
  } 
}
