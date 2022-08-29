import { Injectable } from "@angular/core";
import { Profil } from "../données/donnee.modele";

@Injectable({
    providedIn:'root'
})

export class ProfilService{
  user:Profil[]=[
    {
      id:1,
      name:'rostand',
      lastName:'kinfack',
      age:30,
      country:'France',
      ville:'Paris',
      zipCode:95140
    },
    {
      id:2,
      name:'mawa',
      lastName:'brenda',
      age:18,
      country:'cameroun',
      ville:'Daouala',
      zipCode:95140
    },
    {
      id:3,
      name:'nguimtsop',
      lastName:'richinnel',
      age:18,
      country:'cameroun',
      ville:'Bonaberi',
      zipCode:95140
    },
    {
      id:4,
      name:'loica',
      lastName:'stamo',
      age:15,
      country:'cameroun',
      ville:'yaounde',
      zipCode:95140
    },
    {
      id:5,
      name:'yollanda',
      lastName:'stomevouc',
      age:12,
      country:'France',
      ville:'youndé',
      zipCode:95140
    }
  ];
   getAllProfil():Profil[]{
    return this.user;

}
getProfilById(profileId:number):Profil{
    const profile=this.user.find(profile=>profile.id===profileId);
    if(profile){
        return profile;
    }else{
        throw new Error('not found');
        
    }
}

  }
 