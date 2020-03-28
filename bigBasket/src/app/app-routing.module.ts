import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewCartComponent } from "./view-cart/view-cart.component";
import { TabsComponent } from "./tabs/tabs.component";
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";
import { OrderListComponent } from "./order-list/order-list.component";

const routes: Routes = [
  { path: "", component: TabsComponent },
  {
    path: "cart",
    component: ViewCartComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent
  },
  {
    path: "orderlist",
    component: OrderListComponent
  }
];
//export const routingComponent = [ViewCartComponent];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
