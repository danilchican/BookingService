import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

import { RegStepValidator } from '../../helpers/reg-step-validator';
import { RegistrationModel } from '../../models/registration-model';

@Component({
  selector: 'app-registration-steps',
  templateUrl: './registration-steps.component.html',
  styleUrls: ['./registration-steps.component.css']
})
export class RegistrationStepsComponent implements OnInit, OnChanges {

  private storedIndex = 0;

  @Input() public activeIndex = 0;

  @Input() public registrationModel: RegistrationModel;

  @Output() public activeIndexChange: EventEmitter<number> = new EventEmitter();

  public steps: MenuItem[];

  public regStepValidator: RegStepValidator;

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['activeIndex']) {
      this.storedIndex = this.activeIndex;
    }
  }

  ngOnInit() {
    this.regStepValidator = new RegStepValidator(this.registrationModel);
    this.initSteps();
  }

  private initSteps(): void {
    this.steps = [
      {
        label: 'Step 1',
        disabled: false
      },
      {
        label: 'Step 2',
        disabled: false
      },
      {
        label: 'Step 3',
        disabled: false
      }
    ];
  }

  public changeStep(step: number): void {
    if (this.regStepValidator.canGoToStep(step)) {
      this.activeIndexChange.emit(step);
    } else {
      this.activeIndex = this.storedIndex;
    }
  }
}
