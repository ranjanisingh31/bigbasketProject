import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IData } from "./items";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ComponentServiceService {
  //subject  badge
  badge = new BehaviorSubject<number>(0);

  //get items from server
  private _url: string = "http://localhost:3001/getItems";
  private _url1: string = "http://localhost:3001/items/type";
  private _url2: string = "http://localhost:3001/shippingDetail";
  constructor(private http: HttpClient) {}

  getDetails(data): Observable<IData> {
    return this.http.get<IData>(this._url + "/" + data);
  }

  getType(): Observable<IData[]> {
    return this.http.get<IData[]>(this._url1);
  }

  setShippingDetail(userData) {
    return this.http.post(this._url2, userData);
  }
  //addToCart
  public cartData = {};
  addToCart(item) {
    item.count = 1;
    item.totalPrice = item.count * item.price;
    this.cartData[item.name] = item;
  }
  removeFromCart(item) {
    delete this.cartData[item.name];
  }
  getCartData() {
    return this.cartData;
  }

  //viewCart calculate Total price

  viewCart(count, item) {
    item.count = count;
    item.totalPrice = item.count * item.price;
    this.cartData[item.name] = item;
  }
}
// private _url2: string = "http://localhost:3000/addToCart";
// addToCart(item: IData): Observable<IData> {
//   return this.http.put<IData>(this._url2, item);
// }
