import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  httpHeaderOptions = {
    headers: new HttpHeaders({ "content-type": "application/json" })
  };

  post(url, data) {
    return this.http.post(url, data, this.httpHeaderOptions).pipe(
      map(data => data),
      catchError((error: any) => throwError(error.error))
    );
  }
  get(data) {
    return this.http
      .get("https://jsonplaceholder.typicode.com/todos/" + data)
      .toPromise();
  }
  put(url, data) {
    return this.http
      .put(url, data, {
        headers: new HttpHeaders({ "content-type": "application/json" })
      })
      .pipe(
        map(data => data),
        catchError(err => throwError(err))
      );
  }
}
