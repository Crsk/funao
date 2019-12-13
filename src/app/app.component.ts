import { AuthService } from './shared/services/auth.service';
import { CreateFunaDialog } from './shared/dialogs/create-funa/create-funa.dialog';
import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialog } from './shared/dialogs/auth/auth.dialog';
import { User } from './shared/models/user';
import { Subscription } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'fun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  user: User
  user$$: Subscription

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
  ) {
    this.user$$ = this.authService.user$.subscribe(user => this.user = user)
  }

  createFuna(): void {
    this.dialog.open(CreateFunaDialog, {
      panelClass: 'create-funa-dialog',
      width: '100hw',
      autoFocus: false,
      disableClose: true,
    })
  }

  login() {
    this.dialog.open(AuthDialog, {
      autoFocus: false
    })
  }

  ngOnDestroy() {
    if (this.user$$) this.user$$.unsubscribe()
  }

}
