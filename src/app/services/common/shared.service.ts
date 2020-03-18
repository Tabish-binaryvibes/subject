import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class SharedService {
  constructor(private http: HttpClient) {}
  listSubject$ = new Subject<any>();
  _listSubject = this.listSubject$.asObservable();

  getData(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/" + id);
  }
}
