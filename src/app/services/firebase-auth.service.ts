import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import firebase from 'firebase';
import User = firebase.User;
import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';
// import 'rxjs/add/observable/fromPromise';
// import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(JSON.stringify(localStorage.getItem('user')));
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(JSON.stringify(localStorage.getItem('user')));
      }
    });
  }

  // Sign in with email/password
  SignIn(phoneNumber: string): Observable<any> {
    const rcv = new firebase.auth.RecaptchaVerifier('SIGN_IN', {
      size: 'invisible',
      callback: (response: any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log('Got some data ' + response);
      }
    });
    return fromPromise(this.afAuth.signInWithPhoneNumber(phoneNumber, rcv));
    // return this.afAuth.signInWithPhoneNumber(phoneNumber, rcv)
    //   .then((result) => {
    //     console.log(result);
    //   }).catch((error) => {
    //     window.alert(error.message);
    //   });
  }
}
