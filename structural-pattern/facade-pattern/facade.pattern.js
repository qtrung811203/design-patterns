// Hàm để giảm giá 📉
class Discount {
  calc(value) {
    return value * 0.9;
  }
}

// Chi phí vận chuyển 🚢
class Shipping {
  calc() {
    return 5;
  }
}

// Phí thuế VAT 8% 💵
class Fees {
  calc(value) {
    return value * 1.08;
  }
}

// Write Facade Pattern, như bảng điều khiển trung tâm!
class ShopFacadePattern {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc(price);

    return price;
  }
}

// Người dùng sử dụng và bấm nút!
function buy(price) {
  const shop = new ShopFacadePattern();
  console.log(`Price:::`, shop.calc(price));
}

// Thực thii
buy(2000);
