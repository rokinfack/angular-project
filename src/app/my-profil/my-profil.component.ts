import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Profil } from '../données/donnee.modele';
import { ProfilService } from '../service/profile-modele.service';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.scss']
})
export class MyProfilComponent implements OnInit {
 @Input() profile!:Profil;

  constructor(private service:ProfilService,private router:Router) { }

  ngOnInit(): void {
  }

  onViewProfil():void{
    this.router.navigateByUrl(`profil/${this.profile.id}`);

  }

}
