// Lớp máy vending machine
class VendingMachine {
  constructor() {
    this.state = "idle"; // Trạng thái của máy
    this.stock = 2;
  }

  insertCoin() {
    if (this.state === "idle") {
      this.state = "hasMoney";
      console.log("💰 Coin inserted !!");
    } else {
      console.log("⚠️ Cannot insert coin right now.");
    }
  }

  pressButton() {
    if (this.state === "hasMoney") {
      if (this.stock > 0) {
        this.state = "dispensing";
        this.stock--;
        console.log("🥤 Dispensing drink...");
        this.state = this.stock > 0 ? "idle" : "outOfStock";
      } else {
        this.state = "outOfStock";
        console.log("❌ Out of stock!");
      }
    } else {
      console.log("⚠️ You need to insert coin first.");
    }
  }
}
