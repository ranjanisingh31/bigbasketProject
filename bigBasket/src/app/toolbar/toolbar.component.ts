import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  public opened = "false";
  callfun() {
    if (this.opened === "false") {
      this.opened = "true";
    } else {
      this.opened = "false";
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
