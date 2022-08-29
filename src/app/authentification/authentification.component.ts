import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  myEmail!:FormGroup;

  constructor(private fb:FormBuilder,) { }

  ngOnInit(): void {
    this.myEmail=this.fb.group({
      firstname:[''],
      lastName:[''],
      age:['']
    })
  }
  onClick(){
    console.log(this.myEmail.value);
  }

}
