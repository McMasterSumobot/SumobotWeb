import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { CompetitionComponent } from './competition/competition.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AdvancedComponent } from './advanced/advanced.component';

const routes: Routes =[
    { path: 'landing', component: HomeComponent },
    { path: 'register', component: SignupComponent },
    { path: 'home', component: LandingComponent },
    { path: 'tutorials', component: TutorialsComponent},
    { path: 'competitions', component: CompetitionComponent},
    { path: 'advanced-competition', component: AdvancedComponent},
    { path: 'beginner-competition', component: BeginnerComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
