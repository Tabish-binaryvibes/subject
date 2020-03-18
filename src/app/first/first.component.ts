import { throwError } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { SharedService } from "../services/common/shared.service";
import { debounceTime, distinctUntilChanged, catchError } from "rxjs/operators";
import { isArray, debug } from "util";
@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"]
})
export class FirstComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  dataSet: any = [];
  id: any = "";
  listSubject$ = this.sharedService.listSubject$;
  _listSubject = this.sharedService._listSubject;
  getData(id) {
    return this.sharedService.getData(id).subscribe(
      data => {
        if (isArray(data)) {
          this.dataSet = data;
          console.log(this.dataSet);
        } else {
          this.dataSet = [];
          this.dataSet.push(data);
        }
      },
      catchError(error => throwError(error))
    );
  }

  search() {
    this._listSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(data => {
        this.id = data;
        this.getData(this.id);
      });
  }

  ngOnInit() {
    this.search();
  }
}
