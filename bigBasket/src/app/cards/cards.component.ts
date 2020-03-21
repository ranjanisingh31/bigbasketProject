import { Component, OnInit, Input } from "@angular/core";
import { ComponentServiceService } from "../component-service.service";
import { IData } from "../items";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
  constructor(private _data: ComponentServiceService) {}
  public items = [];
  @Input() public parentdata: string;

  // addToCart(file) {
  //   console.log(file);
  //   this._data.addToCart(file).subscribe(
  //     data => console.log("added to cart successfully"),
  //     error => console.log("error in adding to cart")
  //   );
  // }
  ngOnInit(): void {
    this._data.getDetails().subscribe(data => {
      this.items = data;
      console.log("items", this.items);
      console.log(this.parentdata);
    });
  }
}
