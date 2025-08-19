// -- State Interface
class State {
  insertCoin() {
    throw new Error("Not Implemented");
  }

  pressButton() {
    throw new Error("Not Implemented");
  }
}

// State of idle
class IdleState extends State {
  constructor(machine) {
    super();
    this.machine = machine;
  }

  insertCoin() {
    console.log("Coin Inserted");
    this.machine.setState(this.machine.hasMoneyState);
  }

  pressButton() {
    console.log("Insert coin first");
  }
}

// State of having money
class HasMoneyState extends State {
  constructor(machine) {
    super();
    this.machine = machine;
  }

  insertCoin() {
    console.log(`Already has coin!`);
  }

  pressButton() {
    if (this.machine.stock > 0) {
      console.log(`Here is your bottle of water!`);
      this.machine.stock--;
      this.machine.setState(
        this.machine.stock > 0 ? this.machine.idleState : this.machine.outOfStockState
      );
    } else {
      this.machine.setState(this.machine.outOfStockState);
      this.machine.state.pressButton();
    }
  }
}

// State of out of stock!
class OutOfStock extends State {
  constructor(machine) {
    super();
    this.machine = machine;
  }

  insertCoin() {
    console.log(`OUT OF STOCK!`);
  }

  pressButton() {
    console.log(`OUT OF STOCK!`);
  }
}

// Main Class: Vending Machine
class VendingMachien {
  constructor(stock = 2) {
    this.stock = stock;
    this.idleState = new IdleState(this);
    this.hasMoneyState = new HasMoneyState(this);
    this.outOfStockState = new OutOfStock(this);
    this.state = stock > 0 ? this.idleState : this.outOfStockState;
  }

  setState(state) {
    this.state = state;
  }

  insertCoin() {
    this.state.insertCoin();
  }

  pressButton() {
    this.state.pressButton();
  }
}

// Client usage
const vendingMachine = new VendingMachien(2);
// state idle
vendingMachine.insertCoin();
// state hasCoin
vendingMachine.pressButton();
//return water

// state idle
vendingMachine.insertCoin();
// state hasCoin
vendingMachine.pressButton();

// state outOfStock
vendingMachine.pressButton();
