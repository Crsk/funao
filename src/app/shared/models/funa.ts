import { IFuna } from '../interfaces/funa';
import { IdentValues } from './identValues';

export class Funa implements IFuna {
    id?: string
    title: string
    identValues: IdentValues

    constructor(iFuna?: IFuna) {
        Object.assign(this, iFuna)
        this.identValues = new IdentValues()
    }

    model(id?: string): IFuna {
        return {
            id: id || this.id,
            title: this.title || null,
            identValues: this.identValues.model() || null,
        }
    }
}