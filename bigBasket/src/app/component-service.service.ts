import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IData } from "./items";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ComponentServiceService {
  //items
  private _url: string = "http://localhost:3000/getItems";
  private _url1: string = "http://localhost:3000/items/type";
  constructor(private http: HttpClient) {}
  getType(): Observable<IData[]> {
    return this.http.get<IData[]>(this._url1);
  }
  getDetails(data: IData[]): Observable<IData[]> {
    console.log("service");
    return this.http.get<IData[]>(this._url, data);
  }
  // private _url2: string = "http://localhost:3000/addToCart";
  // addToCart(item: IData): Observable<IData> {
  //   return this.http.put<IData>(this._url2, item);
  // }
}
