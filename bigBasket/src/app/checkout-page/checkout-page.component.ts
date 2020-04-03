import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ComponentServiceService } from "../component-service.service";

@Component({
  selector: "app-checkout-page",
  templateUrl: "./checkout-page.component.html",
  styleUrls: ["./checkout-page.component.css"]
})
export class CheckoutPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _data: ComponentServiceService
  ) {}
  public shippingForm;

  get name() {
    return this.shippingForm.get("name");
  }
  get email() {
    return this.shippingForm.get("email");
  }
  get street1() {
    return this.shippingForm.get("address.street1");
  }
  get city() {
    return this.shippingForm.get("address.city");
  }
  get state() {
    return this.shippingForm.get("address.state");
  }
  get postalCode() {
    return this.shippingForm.get("address.postalCode");
  }
  get mob() {
    return this.shippingForm.get("mob");
  }

  onSubmit() {
    this._data.setShippingDetail(this.shippingForm.value).subscribe(
      response => console.log("submitted successfully.", response),
      error =>
        console.log(
          "error in submitting the Form. Please refresh to continue shopping again",
          error
        )
    );
  }
  ngOnInit(): void {
    this.shippingForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: this.fb.group({
        street1: ["", Validators.required],
        street2: [""],
        city: ["", Validators.required],
        state: ["", Validators.required],
        postalCode: ["", [Validators.required, Validators.minLength(6)]]
      }),
      mob: ["", [Validators.required, Validators.minLength(10)]]
    });
  }
}
