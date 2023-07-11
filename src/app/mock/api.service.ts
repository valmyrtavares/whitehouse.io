import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  QuerySnapshot,
} from 'firebase/firestore';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environementPropertyPlaces } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  firebaseConfig = {
    apiKey: 'AIzaSyChLTIR7CKVv24DzuW5RSkZZgAnCCVg-0o',
    authDomain: 'casa-tabatinga.firebaseapp.com',
    projectId: 'casa-tabatinga',
    storageBucket: 'casa-tabatinga.appspot.com',
    messagingSenderId: '604535013182',
    appId: '1:604535013182:web:f148e5a465f1459cbb766f',
  };
  app: any;
  db: any;

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
    this.db = getFirestore(this.app);
  }

  createCollection(data: environementPropertyPlaces): void {
    new Observable((observer) => {
      addDoc(collection(this.db, 'environementPropertyPlaces'), data)
        .then((ref) => {
          observer.next(ref);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
    ('');
  }

  getData(data): Observable<any[]> {
    return from(getDocs(collection(this.db, data))).pipe(
      switchMap((snapshot: QuerySnapshot) => {
        const books = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        return of(books);
      })
    );
  }
}
