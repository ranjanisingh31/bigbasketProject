import { Component, OnInit } from "@angular/core";
import { ComponentServiceService } from "../component-service.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
})
export class ToolbarComponent implements OnInit {
  // public opened = "false";
  // callfun() {
  //   if (this.opened === "false") {
  //     this.opened = "true";
  //   } else {
  //     this.opened = "false";
  //   }
  // }
  public badge: number;
  public hide: boolean;
  constructor(private _data: ComponentServiceService) {
    this._data.badge.subscribe((data) => {
      this.badge = data;
      if (this.badge == 0) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    });
  }
  badgeOff() {
    this.hide = true;
  }
  badgeVisibility() {
    if (this.badge == 0) {
      this.hide = true;
    }
    this.hide = false;
  }

  ngOnInit(): void {}
}
