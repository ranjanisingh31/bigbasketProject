import { Component, OnInit } from "@angular/core";
import { ComponentServiceService } from "../component-service.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {
  public tabs;

  constructor(private _data: ComponentServiceService) {}

  ngOnInit(): void {
    this._data.getType().subscribe(data => {
      this.tabs = data;
    });
  }
}
