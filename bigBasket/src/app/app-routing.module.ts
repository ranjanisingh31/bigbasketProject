import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewCartComponent } from "./view-cart/view-cart.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ThankYouPageComponent } from "./thank-you-page/thank-you-page.component";

const routes: Routes = [
  { path: "", component: TabsComponent },
  {
    path: "cart",
    component: ViewCartComponent
  },
  {
    path: "thankyoupage",
    component: ThankYouPageComponent
  }
];
//export const routingComponent = [ViewCartComponent];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
