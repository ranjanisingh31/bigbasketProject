import { Component, OnInit, DoCheck } from "@angular/core";
import { ComponentServiceService } from "../component-service.service";

@Component({
  selector: "app-view-cart",
  templateUrl: "./view-cart.component.html",
  styleUrls: ["./view-cart.component.css"]
})
export class ViewCartComponent implements OnInit, DoCheck {
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
      console.log(this.total);
    }

    //console.log("totalData", this.totalData);
    //calculating total
    // var length = Object.keys(this.totalData).length;
    // this.data1 = Object.values(this.totalData);
    // for (var i = 0; i < length; i++) {
    //   this.total += this.data1[i];
    //   console.log(this.data1[i]);
    // }
    console.log("total", this.total);
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
