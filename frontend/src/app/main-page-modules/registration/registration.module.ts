import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  SelectButtonModule,
  StepsModule } from 'primeng/primeng';

import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './routing/registration.routing.module';
import { ProjectSharedModule } from '../../shared/shared.module';
import { RegistrationStepsComponent } from './components/registration-steps/registration-steps.component';
import { RegistrationTypeStepComponent } from './components/registration-type-step/registration-type-step.component';
import { RegistrationDataStepComponent } from './components/registration-data-step/registration-data-step.component';
import { RegistrationConfirmsComponent } from './components/registration-confirms/registration-confirms.component';

@NgModule({
  imports: [
    CommonModule,
    SelectButtonModule,
    StepsModule,
    ProjectSharedModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent,
    RegistrationStepsComponent,
    RegistrationTypeStepComponent,
    RegistrationDataStepComponent,
    RegistrationConfirmsComponent
  ]
})
export class RegistrationModule { }
