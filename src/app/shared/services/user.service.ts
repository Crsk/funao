import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<IUser> = this.db.collection<IUser>('users')

  constructor(private db: AngularFirestore) { }

  /**
   * get all users from db
   */
  public getUsers(): Observable<User[]> {
    return this.userCollection.valueChanges().pipe(map(x => x.map(x => new User(x))))
  }

  /**
   * Gets the user instance observable from given id
   * @param uid - the user unique identificator
   */
  public getUser(uid: string): Observable<User> {
    return this.userCollection.doc<IUser>(uid).valueChanges().pipe(map(user => new User(user)))
  }

  /**
   * updates or creates the user
   * @param user - the user with the new values
   */
  public upSertUser(user: User) {
    this.userCollection.doc<IUser>(user.uid).set(user.model(), { merge: true })
  }

}
