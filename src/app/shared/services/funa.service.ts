import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IFuna } from '../interfaces/funa';
import { Funa } from '../models/funa';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FunaService {

  funaCollection: AngularFirestoreCollection<IFuna> = this.db.collection<IFuna>('funas')

  constructor(private db: AngularFirestore) { }

  /**
   * Adds a funa to the database
   * @param funa - the funa instance to get model from
   */
  public async create(funa: Funa): Promise<void> {
    const newId: string = this.db.createId()
    return await this.funaCollection.doc(newId).set(funa.model(newId))
  }

  /**
   * Gets all funas from db
   * @returns an observable that contains the funas class instances
   */
  public getFunas(): Observable<Funa[]> {
    return this.funaCollection.valueChanges().pipe(map(funas => funas.map(funa => new Funa(funa))))
  }
}
