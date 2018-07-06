import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RegistrationModel } from '../../models/registration-model';

@Component({
  selector: 'app-registration-confirms',
  templateUrl: './registration-confirms.component.html',
  styleUrls: ['./registration-confirms.component.css']
})
export class RegistrationConfirmsComponent implements OnInit {

  @Input() public registrationModel: RegistrationModel;

  @Output() public prevStepEvent: EventEmitter<{}> = new EventEmitter();

  @Output() public finishEvent: EventEmitter<{}> = new EventEmitter();

  ngOnInit() {
  }

  public prevStep(): void {
    this.prevStepEvent.emit();
  }

  public finish(): void {
    this.finishEvent.emit();
  }
}
