import { throwError } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { SharedService } from "../services/common/shared.service";
import { debounceTime, distinctUntilChanged, catchError } from "rxjs/operators";
import { isArray } from "util";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.scss"]
})
export class SecondComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  listSubject$ = this.sharedService.listSubject$;
  id: any = "";
  dataSet: any = [];
  getData(id) {
    this.sharedService.getData(id).subscribe(
      data => {
        if (isArray(data)) {
          this.dataSet = data;
        } else {
          this.dataSet = [];
          this.dataSet.push(data);
        }
      },
      catchError(error => throwError(error))
    );
  }
  search() {
    this.listSubject$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(res => {
        this.id = res;
        this.getData(this.id);
      });
  }
  ngOnInit() {
    this.search();
  }
}
