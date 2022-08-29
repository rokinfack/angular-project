import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfilComponent } from './my-profil/my-profil.component';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { ProfilService } from './service/profile-modele.service';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePictureComponent } from './single-picture/single-picture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProfilComponent,
    ListProfilComponent,
    HeaderComponent,
    LandingPageComponent,
    SinglePictureComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
