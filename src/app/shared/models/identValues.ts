import { IIdentValues } from './../interfaces/identValues';

export interface IOther {
    field: string
    value: string
}

export class IdentValues implements IIdentValues {

    name?: string = ''
    alias?: string = ''
    rut?: string = ''
    address?: string = ''
    photos?: string[] = []
    other?: IOther = {
        field: '',
        value: ''
    }

    constructor(iIdentValues?: IIdentValues) {
        Object.assign(this, iIdentValues)
    }

    model() {
        return {
            name: this.name,
            alias: this.alias,
            rut: this.rut,
            address: this.address,
            photos: this.photos,
            other: this.other,
        }
    }

}