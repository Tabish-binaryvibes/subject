import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PricingOptionsComponent } from "./pricing-options/pricing-options.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { ReactiveDynamicFormsComponent } from "./reactive-dynamic-forms/reactive-dynamic-forms.component";
import { FlexLayoutsComponent } from "./flex-layouts/flex-layouts.component";
import { FirstComponent } from "./first/first.component";

const routes: Routes = [
  {
    path: "",
    component: LifecycleHooksComponent
  },
  {
    path: "pricing",
    component: PricingOptionsComponent
  },
  {
    path: "reactive",
    component: ReactiveDynamicFormsComponent
  },
  {
    path: "layout",
    component: FlexLayoutsComponent
  },
  {
    path: "overview",
    component: FirstComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
