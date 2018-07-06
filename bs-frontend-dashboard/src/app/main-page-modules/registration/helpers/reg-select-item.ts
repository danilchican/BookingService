import { SelectItem } from 'primeng/primeng';

import { TypeOfRegEnum } from '../models/type-of-reg.enum';

export class RegSelectItem implements SelectItem {

    constructor(
        public label: string,
        public value: TypeOfRegEnum
    ) { }
}
