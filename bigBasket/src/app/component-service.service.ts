import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IData } from "./items";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ComponentServiceService {
  //subject  badge
  badge = new BehaviorSubject<number>(0);

  //get items from server
  private _url: string = "http://localhost:3001/getItems";
  private _url1: string = "http://localhost:3001/items/type";
  constructor(private http: HttpClient) {}

  getDetails(data): Observable<IData> {
    return this.http.get<IData>(this._url + "/" + data);
  }

  getType(): Observable<IData[]> {
    return this.http.get<IData[]>(this._url1);
  }

  //addToCart
  public cartData = {};
  addToCart(item) {
    this.cartData[item.name] = item;
  }
  removeFromCart(item) {
    delete this.cartData[item.name];
  }
  getCartData() {
    return this.cartData;
  }

  //viewCart calculate Total price
  public cart = {};
  public total: number;
  viewCart(count, item) {
    this.cart[item.name] = count * item.price;
  }
  getViewCart() {
    return this.cart;
  }
  // private _url2: string = "http://localhost:3000/addToCart";
  // addToCart(item: IData): Observable<IData> {
  //   return this.http.put<IData>(this._url2, item);
  // }
}
