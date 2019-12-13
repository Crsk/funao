import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'fun-auth',
  templateUrl: './auth.dialog.html',
  styleUrls: ['./auth.dialog.scss']
})
export class AuthDialog implements OnInit, OnDestroy {

  user: User
  user$$: Subscription

  constructor(
    private dialogRef: MatDialogRef<AuthDialog>,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => this.user = user)
  }

  public async googleSignIn() {
    await this.authService.googleSignIn()
    this.dialogRef.close()
  }

  public async instagramSignIn() {
    this._snackBar.open('😡 Calmación, aun no está listo!!!!!!', 'Dale...', {
      duration: 5000,
    })
  }

  public async signOut() {
    await this.authService.signOut()
    this.dialogRef.close()
  }

  ngOnDestroy() {
    if (this.user$$) this.user$$.unsubscribe()
  }

}
