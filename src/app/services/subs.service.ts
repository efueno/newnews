import { Subs } from './subs';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubsService {
 
  private dbPath='/subs'
  membersRef: AngularFireList<Subs> = null;

  constructor(private db:AngularFireDatabase,private firestore: AngularFirestore) {
    this.membersRef=db.list(this.dbPath)
   }
   createMember(subsEmail){
    
    return this.firestore.collection('subs').add(subsEmail).then(() => {
      window.alert('Your email saved on our database.');
      location.reload()
    }).catch((error) => {
      window.alert(error)
    })

   }

   getAllMembers(){

    return this.firestore.collection('subs').snapshotChanges();
   }
}
