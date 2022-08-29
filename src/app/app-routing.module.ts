import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { SinglePictureComponent } from './single-picture/single-picture.component';

const routes: Routes = [
  {path:'profil/:id', component:SinglePictureComponent},
  {path:'profil', component:ListProfilComponent},
  {path:'', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
