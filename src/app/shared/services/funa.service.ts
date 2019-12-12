import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IFuna } from '../interfaces/funa';
import { Funa } from '../models/funa';

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
  async create(funa: Funa): Promise<void> {
    const newId: string = this.db.createId()
    return await this.funaCollection.doc(newId).set(funa.model(newId))
  }
}
