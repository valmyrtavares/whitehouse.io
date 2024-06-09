import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiRealtimeDatabaseService {
  constructor(private http: HttpClient) {}

  getData(data: string): Observable<Object> {
    return this.http
      .get(
        `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/${data}.json`
      )
      .pipe(
        map((res) => {
          const data = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              data.push({ ...res[key], id: key });
            }
          }
          data;
          return data;
        })
      );
  }

  getObjData(data:any){
    return this.http
    .get(
      `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/${data}.json`
    )
  }

  createCollection(data: string, content: Object) {
    this.http
      .post(
        `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/${data}.json`,
        content
      )
      .subscribe((res) => {
       
      });
  }

  deleteImage(data: string, id: string) {
    let lux = this.http.delete(
      `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/${data}/${id}.json`
    );
    return lux;
  }

  updateImage(collecton: string, id: string, form: NgForm) {
    this.http
      .put(
        `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/${collecton}/${id}.json`,
        form
      )
      .subscribe((res) => {
       
      });
  }
}
//https://firebasestorage.googleapis.com/v0/b/projeto-primeiro-de92d.appspot.com/o/frontImageHome%2F4X3A8577.JPG?alt=media&token=06d1f51f-bf43-4348-9811-c2ea25aef6b3
