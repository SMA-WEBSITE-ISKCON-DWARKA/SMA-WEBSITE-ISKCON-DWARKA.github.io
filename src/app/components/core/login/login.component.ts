import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FirebaseAuthService} from '../../../services/firebase-auth.service';
import {UserServiceService} from '../../../services/user-service.service';
import {FirebaseUserResponse} from '../../../models/firebase.interface';
import {UserCreatedResponse} from '../../../models/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseAuth: FirebaseAuthService, private userService: UserServiceService, private router: Router) {
  }

  @ViewChild('SIGN_IN_FB') signInFb: ElementRef;
  phoneNumber = '';
  enteredCode = '';
  // confResult;
  signInResult = null;
  showCodeInput = false;
  userExist = false;

  ngOnInit(): void {
    if (localStorage.getItem('sma_user')){
      this.router.navigate(['/dashboard']);
    }
  }


  checkUser() {
    this.userService.checkUser(this.phoneNumber)
      .subscribe(res => {
        console.log('=======================================');
        console.log('=======================================');
        console.log(res);
        console.log('=======================================');
        console.log('=======================================');
        this.userExist = true;
        this.signInFb.nativeElement.click();
      }, error => {
        alert(`The user with number ${this.phoneNumber} does not exist, kindly contact admin`);
      });
  }

  checkCode() {
    if (this.signInResult !== null) {
      this.signInResult.confirm(this.enteredCode).then((result: FirebaseUserResponse) => {
        // User signed in successfully.
        if (result.additionalUserInfo.isNewUser) {
          //Need to register user to backend
          console.log('Came in if');
          this.userService.registerUser({firebaseId: result.user.uid, phoneNumber: result.user.phoneNumber})
            .subscribe((res) => {
              console.log('User registered successfully ');
              console.log(res);
              alert(`Welcome ${res.userId}`);
              localStorage.setItem('sma_user', JSON.stringify(res));
              this.router.navigate(['/dashboard']);
            }, error => {
              console.log('Error occurred registering the user');
            });
        } else {
          /**
           * Now here user could be logging on a new device
           * Or using the exising device
           * if a new device is there, remove the previous device from backend
           * if existing device
           */
          this.userService.getUserUsingFirebaseId(result.user.uid)
            .subscribe((res) => {
              localStorage.setItem('sma_user', JSON.stringify(res));
              this.router.navigate(['/dashboard']);
            });
        }
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
    }
  }

  login() {
    const loginSub = this.firebaseAuth.SignIn(this.phoneNumber);
    loginSub.subscribe((res) => {
      this.signInResult = res;
    }, error => {

    });
  }

}
