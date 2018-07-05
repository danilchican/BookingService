import { TypeOfRegEnum } from './type-of-reg.enum';

export class RegistrationModel {

    public static empty(): RegistrationModel {
        return new RegistrationModel(TypeOfRegEnum.Client, '', '', '', '', '', '', '', '', '');
    }

    constructor(
        public typeOfReg: TypeOfRegEnum,
        public email: string,
        public password: string,
        public confirmation: string,
        public name: string,
        public phone: string,
        public companyName: string,
        public companyPhone: string,
        public unp: string,
        public address: string
    ) { }

    public prepareDataFor(type: TypeOfRegEnum): void {
        type === TypeOfRegEnum.Client
            ? this.prepareDataForClient()
            : this.prepareDataForCompany();
    }

    private prepareDataForClient(): void {
        this.companyName = '';
        this.companyPhone = '';
        this.unp = '';
        this.address = '';
    }

    private prepareDataForCompany(): void {
        this.name = '';
        this.phone = '';
    }

    public clearPassword(): void {
        this.password = '';
        this.confirmation = '';
    }

    public isValid(): boolean {
        return this.email && this.password && this.isValidConfirmation();
    }

    public isValidConfirmation(): boolean {
        return this.password === this.confirmation;
    }
}
