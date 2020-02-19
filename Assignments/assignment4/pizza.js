var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza(topp, size, base, quantity) {
        this.size = size;
        this.base = base;
        this.topp = topp;
        this.quantity = quantity;
    }
    Pizza.prototype.priceCalc = function () {
        var o2 = ["small", "medium", "large"];
        if (this.size == o2[1]) {
            this.price = 50;
        }
        else if (this.size == o2[2]) {
            this.price = 100;
        }
        else {
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
        }
        else if (this.base == o3[3] || this.base == o3[4]) {
            this.price += 40;
        }
        return this.price;
    };
    return Pizza;
}());
var VegPizza = /** @class */ (function (_super) {
    __extends(VegPizza, _super);
    function VegPizza(topp, size, base, quantity) {
        var _this = _super.call(this, topp, size, base, quantity) || this;
        _this.toppings = [
            "corn",
            "cheese",
            "mushroom",
            "mixVeg",
            "grilled veggie"
        ];
        _this.size = size;
        _this.base = base;
        _this.topp = topp;
        _this.quantity = quantity;
        return _this;
    }
    VegPizza.prototype.priceCalc = function () {
        var p = _super.prototype.priceCalc.call(this);
        console.log(p);
        if (this.topp == this.toppings[0] ||
            this.topp == this.toppings[1] ||
            this.topp == this.toppings[2]) {
            p += 100;
        }
        else {
            p = p + 200;
        }
        return p * this.quantity;
    };
    return VegPizza;
}(Pizza));
var NonVegPizza = /** @class */ (function (_super) {
    __extends(NonVegPizza, _super);
    function NonVegPizza(topp, size, base, quantity) {
        var _this = _super.call(this, topp, size, base, quantity) || this;
        _this.toppings = ["salami", "ham", "pepperoni", "bacon", "sausages"];
        _this.size = size;
        _this.base = base;
        _this.topp = topp;
        _this.quantity = quantity;
        return _this;
    }
    NonVegPizza.prototype.priceCalc = function () {
        var p = _super.prototype.priceCalc.call(this);
        console.log(p);
        if (this.topp == this.toppings[0] || this.topp == this.toppings[1]) {
            p += 150;
        }
        else if (this.topp == this.toppings[2] || this.topp == this.toppings[3]) {
            p = p + 250;
        }
        else {
            p += 300;
        }
        return p * this.quantity;
    };
    return NonVegPizza;
}(Pizza));
