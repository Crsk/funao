import { FunaService } from './../../services/funa.service';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Funa } from '../../models/funa';

@Component({
  selector: 'fun-create-funa',
  templateUrl: './create-funa.dialog.html',
  styleUrls: ['./create-funa.dialog.scss']
})
export class CreateFunaDialog {

  public exitMessage: string = '😨 Tengo miedo'
  public identSelection: string[] = []
  public funa: Funa
  public idents: string[] = [
    'Nombre',
    'Apodo',
    'RUT',
    'Dirección',
    'Fotos',
    'Otro',
  ]

  constructor(
    private dialogRef: MatDialogRef<CreateFunaDialog>,
    private funaService: FunaService,
  ) { this.funa = new Funa() }

  /**
   * asks for confirmation, then closes the create funa dialog
   */
  public exit(): void {
    this.exitMessage === '😯 Salir' ? this.dialogRef.close() : null
    setTimeout(() => this.exitMessage = '😨 Tengo miedo', 4000)
    this.exitMessage = '😯 Salir'
  }

  /**
   * Creates a funa in db, right then closes the modal
   */
  public async createFuna(): Promise<void> {
    this.exitMessage = '⏳ ...'
    await this.funaService.create(this.funa)
    this.dialogRef.close()
  }

  /**
   * Looks for name user selection
   * @returns the name if found, undefined if not
   */
  public get name(): string | undefined {
    return this.identSelection.find(x => x === 'Nombre')
  }

  /**
   * Looks for alias user selection
   * @returns the alias if found, undefined if not
   */
  public get alias(): string | undefined {
    return this.identSelection.find(x => x === 'Apodo')
  }

  /**
   * Looks for rut user selection
   * @returns the rut if found, undefined if not
   */
  public get rut(): string | undefined {
    return this.identSelection.find(x => x === 'RUT')
  }

  /**
   * Looks for address user selection
   * @returns the address if found, undefined if not
   */
  public get address(): string | undefined {
    return this.identSelection.find(x => x === 'Dirección')
  }

  /**
   * Looks for rut user selection
   * @returns the rut if found, undefined if not
   */
  public get photo(): string | undefined {
    return this.identSelection.find(x => x === 'Fotos')
  }

  /**
   * Looks fot other user selection
   * @returns the other if found, undefined if not
   */
  public get other(): string | undefined {
    return this.identSelection.find(x => x === 'Otro')
  }

}
