import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { CompetitionComponent } from './competition/competition.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    TutorialsComponent,
    AdvancedComponent,
    BeginnerComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
