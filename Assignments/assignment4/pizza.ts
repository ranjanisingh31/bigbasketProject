class Pizza {
  toppings: string[];
  size: string;
  price: number;
  base: string;
  topp: string;
  quantity: number;
  constructor(topp: string, size: string, base: string, quantity: number) {
    this.size = size;
    this.base = base;
    this.topp = topp;
    this.quantity = quantity;
  }

  priceCalc(): number {
    var o2 = ["small", "medium", "large"];
    if (this.size == o2[1]) {
      this.price = 50;
    } else if (this.size == o2[2]) {
      this.price = 100;
    } else {
      this.price = 0;
    }
    var o3 = [
      "thin crust",
      "thick crust",
      "deep crust",
      "cheese filled crust",
      "stuffed crust"
    ];
    if (this.base == o3[0] || this.base == o3[1] || this.base == o3[2]) {
      this.price += 20;
    } else if (this.base == o3[3] || this.base == o3[4]) {
      this.price += 40;
    }
    return this.price;
  }
}
class VegPizza extends Pizza {
  toppings: string[] = [
    "corn",
    "cheese",
    "mushroom",
    "mixVeg",
    "grilled veggie"
  ];
  size: string;
  price: number;
  base: string;
  topp: string;
  quantity: number;
  constructor(topp: string, size: string, base: string, quantity: number) {
    super(topp, size, base, quantity);
    this.size = size;
    this.base = base;
    this.topp = topp;
    this.quantity = quantity;
  }
  priceCalc(): number {
    var p = super.priceCalc();
    console.log(p);
    if (
      this.topp == this.toppings[0] ||
      this.topp == this.toppings[1] ||
      this.topp == this.toppings[2]
    ) {
      p += 100;
    } else {
      p = p + 200;
    }
    return p * this.quantity;
  }
}
class NonVegPizza extends Pizza {
  toppings: string[] = ["salami", "ham", "pepperoni", "bacon", "sausages"];
  size: string;
  price: number;
  base: string;
  topp: string;
  quantity: number;
  constructor(topp: string, size: string, base: string, quantity: number) {
    super(topp, size, base, quantity);
    this.size = size;
    this.base = base;
    this.topp = topp;
    this.quantity = quantity;
  }
  priceCalc(): number {
    var p = super.priceCalc();
    console.log(p);
    if (this.topp == this.toppings[0] || this.topp == this.toppings[1]) {
      p += 150;
    } else if (this.topp == this.toppings[2] || this.topp == this.toppings[3]) {
      p = p + 250;
    } else {
      p += 300;
    }
    return p * this.quantity;
  }
}
