import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface IIdentification {
  value: string,
  viewValue: string,
}

@Component({
  selector: 'fun-create-funa',
  templateUrl: './create-funa.dialog.html',
  styleUrls: ['./create-funa.dialog.scss']
})
export class CreateFunaDialog {

  public exitMessage: string = '😨 Tengo miedo'

  public identificationsSelected: IIdentification[] = []

  public identifications: IIdentification[] = [
    { value: 'name', viewValue: 'Nombre' },
    { value: 'alias', viewValue: 'Apodo' },
    { value: 'rut', viewValue: 'RUT' },
    { value: 'address', viewValue: 'Dirección' },
    { value: 'photos', viewValue: 'Fotos' },
    { value: 'other', viewValue: 'Otro' },
  ]

  constructor(
    public dialogRef: MatDialogRef<CreateFunaDialog>
  ) { }

  /**
   * asks for confirmation, then closes the dialog
   */
  public exit(): void {
    this.exitMessage === '😯 Salir' ? this.dialogRef.close() : null
    setTimeout(() => this.exitMessage = '😨 Tengo miedo', 4000)
    this.exitMessage = '😯 Salir'
  }

  get nameSelected(): boolean {
    return this.identificationsSelected.find(x => x.value === 'name') ? true : false
  }

  get aliasSelected(): boolean {
    return this.identificationsSelected.find(x => x.value === 'alias') ? true : false
  }

  get rutSelected(): boolean {
    return this.identificationsSelected.find(x => x.value === 'rut') ? true : false
  }

  get addressSelected(): boolean {
    return this.identificationsSelected.find(x => x.value === 'address') ? true : false
  }

  get photosSelected(): boolean {
    return this.identificationsSelected.find(x => x.value === 'photos') ? true : false
  }

  get otherSelected(): boolean {
    return this.identificationsSelected.find(x => x.value === 'other') ? true : false
  }

}
