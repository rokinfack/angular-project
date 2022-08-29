import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profil } from '../données/donnee.modele';
import { ProfilService } from '../service/profile-modele.service';

@Component({
  selector: 'app-single-picture',
  templateUrl: './single-picture.component.html',
  styleUrls: ['./single-picture.component.scss']
})
export class SinglePictureComponent implements OnInit {
  profile!:Profil;

  constructor(private service:ProfilService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const profilId=+this.route.snapshot.params['id'];
      this.profile=this.service.getProfilById(profilId)
  }

}
