import { Component, OnInit } from '@angular/core';
import { Profil } from '../données/donnee.modele';
import { ProfilService } from '../service/profile-modele.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {
  userProfiles!:Profil[];


  constructor(private services:ProfilService) { }

  ngOnInit(): void {
    this.userProfiles=this.services.user;
  }

}
