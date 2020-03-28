import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { ComponentServiceService } from "./component-service.service";
import { TabsComponent } from "./tabs/tabs.component";
import { HttpClientModule } from "@angular/common/http";
import { CardsComponent } from "./cards/cards.component";
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";
import { ViewCartComponent } from "./view-cart/view-cart.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    TabsComponent,
    CardsComponent,
    CheckoutPageComponent,
    ViewCartComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ComponentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
