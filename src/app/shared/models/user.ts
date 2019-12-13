import { IUser } from '../interfaces/user'

export class User implements IUser {

    uid: string
    name: string
    email: string
    photoURL: string

    constructor(iUser: IUser) {
        Object.assign(this, iUser)
    }

    model(): IUser {
        return {
            uid: this.uid,
            name: this.name || null,
            email: this.email || null,
            photoURL: this.photoURL || null,
        }
    }

}