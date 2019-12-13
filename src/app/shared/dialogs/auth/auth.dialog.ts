import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fun-auth',
  templateUrl: './auth.dialog.html',
  styleUrls: ['./auth.dialog.scss']
})
export class AuthDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AuthDialog>,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  async googleSignIn() {
    await this.auth.googleSignIn()
    this.dialogRef.close()
  }

}
