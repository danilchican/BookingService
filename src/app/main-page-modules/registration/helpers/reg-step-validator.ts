import { RegistrationModel } from '../models/registration-model';
export class RegStepValidator {

    constructor(
        public registrationModel: RegistrationModel
    ) {}

    public canGoToStep(step: number): boolean {
        return step === 2
            ? this.canGoToThirdStep()
            : true;
    }

    public canGoToThirdStep(): boolean {
        return this.registrationModel.email &&
          this.registrationModel.password &&
          this.registrationModel.isValidConfirmation();
    }
}
