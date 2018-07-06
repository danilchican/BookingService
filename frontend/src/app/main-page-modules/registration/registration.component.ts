import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from './models/registration-model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public activeIndex = 0;

  public registrationModel = RegistrationModel.empty();

  constructor() { }

  ngOnInit() {
  }

  public toStep(step: number): void {
    this.activeIndex = step;
  }

  public registrate(): void {
    console.log('registrate:', this.registrationModel);
  }
}
