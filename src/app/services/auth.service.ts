import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:User;
  constructor(public afs: AngularFirestore,   
    public afAuth: AngularFireAuth, 
    public router: Router,  
    public ngZone: NgZone) { 

/* Saving user data in localstorage when 
    logged in and setting up null when logged out */
this.afAuth.authState.subscribe(user => {
  if (user) {
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(this.userData));
    JSON.parse(localStorage.getItem('user'));
  } else {
    localStorage.setItem('user', null);
    JSON.parse(localStorage.getItem('user'));
  }
})
    }

    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userData= {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
     
      }
      return userRef.set(userData, {
        merge: true
      })
    }
//isloggedin??
  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
  


SignIn(email,password){
  return this.afAuth.auth.signInWithEmailAndPassword(email,password)
  .then((result) => {
    this.ngZone.run(()=> {
      localStorage.setItem('user', JSON.stringify(result.user))
      this.router.navigate(['dashboard'])
    });
    this.SetUserData(result.user)
    
  }).catch((error) =>{
    window.alert(error.message)
  })
}

SignUp(email, password){
  return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
  .then((result)=>{
    console.log('result= '+result)
    console.log('result.user= '+result.user.displayName)

    console.log('result.user= '+result.user.email)
    
    this.SetUserData(result.user);
    this.router.navigate(['news'])
  }).catch((error =>{
    window.alert(error.message)
  }))
}

ForgotPassword(passwordResetEmail) {
  return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    
    window.alert('Password reset email sent, check your inbox.');
    this.router.navigate(['news'])
  }).catch((error) => {
    window.alert(error)
  })
}

// Sign out 
SignOut() {
  return this.afAuth.auth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['news']);
  })
}


public GoogleAuth() {
  return this.AuthLogin(new auth.GoogleAuthProvider());
}
public FacebookAuth() {
  return this.AuthLogin(new auth.FacebookAuthProvider());
}
public TwitterAuth() {
  return this.AuthLogin(new auth.TwitterAuthProvider());
}

AuthLogin(provider) {
  return this.afAuth.auth.signInWithPopup(provider)
  .then((result) => {
     this.ngZone.run(() => {
      localStorage.setItem('user', JSON.stringify(result.user))
        this.router.navigate(['/dashboard']);
      })
    this.SetUserData(result.user);
  }).catch((error) => {
    window.alert(error)
  })
}


}