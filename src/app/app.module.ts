import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalModule } from "ngx-bootstrap/modal";
import { PricingOptionsComponent } from "./pricing-options/pricing-options.component";
import { DataTablesModule } from "angular-datatables";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { ReactiveDynamicFormsComponent } from "./reactive-dynamic-forms/reactive-dynamic-forms.component";
import { FlexLayoutsComponent } from "./flex-layouts/flex-layouts.component";
import { HttpClientModule } from "@angular/common/http";
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThreeComponent } from './three/three.component';
@NgModule({
  declarations: [
    AppComponent,
    PricingOptionsComponent,
    LifecycleHooksComponent,
    ReactiveDynamicFormsComponent,
    FlexLayoutsComponent,
    FirstComponent,
    SecondComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ModalModule.forRoot()
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
