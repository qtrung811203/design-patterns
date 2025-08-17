// Class / Method / module được mở rộng được mà không cần sửa code cũ

// Using Wrong ❌❌❌
// Muốn mở rộng là toang...
class Payment {
  pay(type) {
    if (type) {
      if (type === "cash") {
        console.log(`PAY WITH CASH`);
      }
      if (type === "gold") {
        console.log(`PAY WITH GOLD`);
      }
    }
  }
}

// Using Right ✅✅✅
class PaymentOCP {
  pay() {}
}

class PayWithCash extends PaymentOCP {
  pay() {
    console.log(`PAY WITH CASH`);
  }
}

class PayWithGold extends PaymentOCP {
  pay() {
    console.log(`PAY WITH GOLD`);
  }
}

function checkout(paymentMethod) {
  paymentMethod.pay();
}

checkout(new PayWithCash());
checkout(new PayWithGold());
