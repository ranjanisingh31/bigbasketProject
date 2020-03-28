import { Component, OnInit, Input } from "@angular/core";
import { ComponentServiceService } from "../component-service.service";
import { IData } from "../items";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  public badge: number;
  public cartData = {};
  constructor(private _data: ComponentServiceService) {
    this._data.badge.subscribe(data => (this.badge = data));
  }

  public items;

  @Input() public parentdata: IData;

  addToCartFun(item) {
    this._data.addToCart(item);
    this._data.badge.next(this.badge + 1);
  }
  removeFromCartFun(item) {
    this._data.removeFromCart(item);
    this._data.badge.next(this.badge - 1);
  }

  ngOnInit(): void {
    this._data.getDetails(this.parentdata).subscribe(data => {
      this.items = data;
    });
    this.cartData = this._data.getCartData();
  }
}
