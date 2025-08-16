// Tạo ra các Handler
class Handler {
  setNext(next) {
    this.next = next;
    return next;
  }

  handle(amount) {
    if (this.next) {
      return this.next.handle(amount);
    } else {
      console.log("No body can handle thisss!");
    }
  }
}

// Nhân viên quần chúng!
class Employee extends Handler {
  handle(amount) {
    if (amount <= 100000) {
      console.log("Employee can handle this!");
    } else {
      super.handle(amount);
    }
  }
}

// Quản lý quần chúng!
class Manager extends Handler {
  handle(amount) {
    if (amount < 1000000) {
      console.log("Manager can handle this!");
    } else {
      super.handle(amount);
    }
  }
}

// Ceo quần chúng!
class Ceo extends Handler {
  handle(amount) {
    if (amount <= 10000000) {
      console.log("Ceo can handle this!");
    } else {
      super.handle(amount);
    }
  }
}

const employee = new Employee();
const manager = new Manager();
const ceo = new Ceo();

employee.setNext(manager).setNext(ceo);
console.log(employee);
console.log(manager);
console.log(ceo);

employee.handle(10000);
