import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArabeComponent } from './arabe/arabe.component';
import { EnglishComponent } from './english/english.component';
import { FrenchComponent } from './french/french.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MathematiqueComponent } from './mathematique/mathematique.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'arabe',component:ArabeComponent},
  {path:'french',component:FrenchComponent},
  {path:'english',component:EnglishComponent},
  {path:'mathematique',component:MathematiqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
