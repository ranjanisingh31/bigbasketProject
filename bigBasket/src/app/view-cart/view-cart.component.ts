import { Component, OnInit } from "@angular/core";
import { ComponentServiceService } from "../component-service.service";

@Component({
  selector: "app-view-cart",
  templateUrl: "./view-cart.component.html",
  styleUrls: ["./view-cart.component.css"]
})
export class ViewCartComponent implements OnInit {
  public items = [];
  constructor(private _data: ComponentServiceService) {}
  public cartData = {};
  updateCart(item, count) {
    this._data.viewCart(count.value, item);
  }
  ngOnInit(): void {
    var data = this._data.getCartData();
    this.items = Object.values(data);
    this.cartData = this._data.getViewCart();
  }
}
