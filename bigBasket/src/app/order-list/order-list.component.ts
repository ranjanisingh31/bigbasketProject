import { Component, OnInit } from "@angular/core";
import { ComponentServiceService } from "../component-service.service";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent implements OnInit {
  constructor(private _data: ComponentServiceService) {}
  name = "ranjani";
  public orderedData = [];
  public totals = [];
  ngOnInit(): void {
    var data = this._data.getCartData();
    this.orderedData = Object.values(data);
    var data1 = this._data.getViewCart();
    this.totals = Object.values(data1);
  }
}
