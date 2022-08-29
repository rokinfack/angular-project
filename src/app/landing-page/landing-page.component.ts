import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  myEmail!:FormGroup;

  constructor() {
  
   }

  ngOnInit(): void {
  }
  onClick(form:NgForm){
    console.log(form.value)
  }


}
