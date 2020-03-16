import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  TemplateRef
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
declare const $: JQueryStatic;

@Component({
  selector: "app-pricing-options",
  templateUrl: "./pricing-options.component.html",
  styleUrls: ["./pricing-options.component.scss"]
})
export class PricingOptionsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dataTable: any;
  flag = true;
  list: any = [];
  modalRef: BsModalRef;
  @ViewChild("dataTable") table: ElementRef;
  @ViewChild("priceForm") form;
  input: any = {};
  constructor(
    private modalService: BsModalService,
    private chRef: ChangeDetectorRef
  ) {
    this.input = {
      name: "",
      savings: null,
      residuals: null,
      rates: null
    };
  }
  add_btn = false;
  edit_btn = false;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  value;
  modalPrice(template: TemplateRef<any>, name: any, value?: any) {
    this.openModal(template);
    if (name == "add") {
      this.add_btn = true;
      this.edit_btn = false;
      this.input = {};
      this.value = "";
    } else if (name == "edit") {
      this.input = {};
      Object.assign(this.input, value);
      this.value = this.input;
      console.log(this.value);
      this.edit_btn = true;
      this.add_btn = false;
    } else {
      this.value = "";
      this.edit_btn = false;
      this.add_btn = false;
    }
  }
  addPrice() {
    this.input.id = this.list.length;
    console.log("actual length :", this.list.length);
    console.log("new length :", this.input.id);
    this.list.push(this.input);
    this.modalRef.hide();
  }
  editPrice() {
    this.list[this.value.id] = this.value;
    this.modalRef.hide();
  }
  deleteModalPrice(id) {
    if (confirm("Are you sure ?")) {
      this.list.splice(id, 0);
      const dataSet = this.list.filter(data => data.id != id);
      this.list = dataSet;
    }
  }

  listOfPrices() {
    for (let index = 0; index < 10; index++) {
      this.list.push({
        id: index,
        name: +index + 1 * 25,
        savings: (index + 1) * 27,
        residuals: (index + 1) * 31,
        rates: ((index + 1) / 50) * 100
      });
    }
  }
  ngOnInit() {
    this.listOfPrices();
    this.DataTablesFunctionCallAfterDataInit();
  }

  DataTablesFunctionCallAfterDataInit() {
    if (!this.flag) {
      this.dataTable.clear().destroy();
      this.dataTable = null;
    }

    this.chRef.detectChanges();
    const table: any = $("table");
    this.dataTable = table.DataTable({
      // enables horizontal scrolling
      dom: "lBfrtip",
      autoWidth: false,
      lengthMenu: [[-1], ["Show all"]]
    });
  }
}
