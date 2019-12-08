import { IUser } from '../interfaces/user'

export class User implements IUser {

    id: string
    name: string

    constructor(iUser: IUser) {
        Object.assign(this, iUser)
    }

    model(): Partial<IUser> {
        return {
            name: this.name
        }
    }

}