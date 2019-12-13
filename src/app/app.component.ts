import { CreateFunaDialog } from './shared/dialogs/create-funa/create-funa.dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialog } from './shared/dialogs/auth/auth.dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'fun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  createFuna(): void {
    this.dialog.open(CreateFunaDialog, {
      panelClass: 'create-funa-dialog',
      width: '100hw',
      data: { name: this.name, animal: this.animal },
      autoFocus: false,
      disableClose: true,
    })
  }

  login() {
    this.dialog.open(AuthDialog, {
      autoFocus: false
    })
  }

}
