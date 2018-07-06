import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RegSelectItem } from '../../helpers';
import { TypeOfRegEnum } from '../../models';
import { RegistrationModel } from '../../models/registration-model';

@Component({
  selector: 'app-registration-type-step',
  templateUrl: './registration-type-step.component.html',
  styleUrls: ['./registration-type-step.component.css']
})
export class RegistrationTypeStepComponent implements OnInit {

  @Input() public registrationModel = RegistrationModel.empty();

  @Output() public nextStepEvent: EventEmitter<{}> = new EventEmitter();

  public typesOfRegistration: RegSelectItem[];

  ngOnInit() {
    this.initTypesOfRegistration();
  }

  private initTypesOfRegistration(): void {
    this.typesOfRegistration = [
      { label: 'Я клиент', value: TypeOfRegEnum.Client },
      { label: 'Я компания', value: TypeOfRegEnum.Company },
    ];
  }

  public getAboutTypeOfReg(): string {
    return this.registrationModel.typeOfReg === TypeOfRegEnum.Client
        ? 'Тут описывается всякое про регистрацию клиента'
        : 'Тут описывается всякое про регистрацию компании';
  }

  public itemClick(event, item, index): void {
    console.log(event, item, index);
  }

  public nextStep(): void {
    this.nextStepEvent.emit();
  }
}
