import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TypeOfRegEnum } from '../../models/type-of-reg.enum';
import { RegistrationModel } from '../../models/registration-model';
import { RegStepValidator } from '../../helpers/reg-step-validator';

@Component({
  selector: 'app-registration-data-step',
  templateUrl: './registration-data-step.component.html',
  styleUrls: ['./registration-data-step.component.css']
})
export class RegistrationDataStepComponent implements OnInit {

  @Input() public registrationModel: RegistrationModel;

  @Output() public nextStepEvent: EventEmitter<{}> = new EventEmitter();

  @Output() public prevStepEvent: EventEmitter<{}> = new EventEmitter();

  public TypeOfRegEnum = TypeOfRegEnum;

  public regStepValidator: RegStepValidator;

  ngOnInit() {
    this.registrationModel.prepareDataFor(this.registrationModel.typeOfReg);
    this.registrationModel.clearPassword();
    this.regStepValidator = new RegStepValidator(this.registrationModel);
  }

  public nextStep(): void {
    this.nextStepEvent.emit();
  }

  public prevStep(): void {
    this.prevStepEvent.emit();
  }


}
