import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  createCollection(data: string, content: Object) {
    this.http
      .post(
        `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/${data}.json`,
        content
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
