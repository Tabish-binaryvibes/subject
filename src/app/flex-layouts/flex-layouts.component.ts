import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounce, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { HttpService } from "../services/common/http.service";
import { isArray } from "util";
@Component({
  selector: "app-flex-layouts",
  templateUrl: "./flex-layouts.component.html",
  styleUrls: ["./flex-layouts.component.scss"]
})
export class FlexLayoutsComponent implements OnInit {
  searchTextModel$: Subject<string> = new Subject<string>();
  id: any = "";
  constructor(private http: HttpService) {}
  dataSet: any = [];
  search() {
    this.searchTextModel$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(res => {
        this.id = res;
        this.getData(this.id);
      });
  }
  getData(id) {
    return this.http
      .get(id)
      .then(data => {
        if (isArray(data)) {
          this.dataSet = data;
        } else {
          this.dataSet = [];
          this.dataSet.push(data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  getDataSize() {
    return this.searchTextModel$.asObservable();
  }
  setDataSize() {
    return this.searchTextModel$.next("message");
  }
  ngOnInit() {
    this.search();
  }
}
