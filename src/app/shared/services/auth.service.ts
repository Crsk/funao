import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { auth } from 'firebase';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService,
  ) {
    this.initializeUser$()
  }

  /**
   * Signs in using the google auth
   */
  public async googleSignIn(): Promise<void> {
    const provider = new auth.GoogleAuthProvider()
    const credential = await this.afAuth.auth.signInWithPopup(provider)
    this.updateGoogleUser(credential.user)
  }

  /**
   * Receives a google user and creates or updates its data in our db
   * @param gUser - the user from google auth
   */
  private updateGoogleUser(gUser): void {
    const user: User = new User({
      uid: gUser.uid,
      name: gUser.displayName,
      email: gUser.email,
      photoURL: gUser.photoURL
    })

    this.userService.upSertUser(user)
  }

  /**
   * Signs the user out and shows the principal page
   */
  public async signOut() {
    await this.afAuth.auth.signOut()
    this.router.navigate(['/'])
  }

  /**
   * Get the auth state, then fetch the Firestore user document or return null
   */
  private initializeUser$(): void {
    this.user$ = this.afAuth.authState.pipe(
      filter(a => !!a),
      switchMap(user => this.userService.getUser(user.uid))
    )
  }

}
