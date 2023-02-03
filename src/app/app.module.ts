import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArabeComponent } from './arabe/arabe.component';
import { FrenchComponent } from './french/french.component';
import { EnglishComponent } from './english/english.component';
import { MathematiqueComponent } from './mathematique/mathematique.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ArabeComponent,
    FrenchComponent,
    EnglishComponent,
    MathematiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
