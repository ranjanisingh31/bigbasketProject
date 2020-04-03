import { Component, OnInit, DoCheck } from "@angular/core";
import { ComponentServiceService } from "../component-service.service";

@Component({
  selector: "app-view-cart",
  templateUrl: "./view-cart.component.html",
  styleUrls: ["./view-cart.component.css"],
})
export class ViewCartComponent implements OnInit, DoCheck {
  public sidenav = "false";
  public items = [];

  public total = 0;
  public data1 = [];
  public totalData = {};
  constructor(private _data: ComponentServiceService) {}

  updateCart(item, count) {
    this._data.viewCart(count.value, item);
  }
  // fun(total) {
  //
  //   console.log(this.total);
  // }
  ngOnInit(): void {
    var data = this._data.getCartData();
    this.items = Object.values(data);
    for (var i = 0; i < this.items.length; i++) {
      this.total += this.items[i].totalPrice;
    }
  }

  toggle() {
    if (this.sidenav == "true") {
      this.sidenav = "false";
    } else {
      this.sidenav = "true";
    }
  }
  ngDoCheck() {
    this.total = 0;
    for (var i = 0; i < this.items.length; i++) {
      this.total += this.items[i].totalPrice;
      console.log(this.total);
    }
    console.log("changes");
  }
}
