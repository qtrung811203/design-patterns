// create service Car -> Khuôn mẫu
class Car {
  constructor(name = "Mercedes", doors = 4, price = "10 VND", customerInfo = {}) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

// Create Service Logistic - Các hàm sản xuất
class ServiceLogistic {
  constructor() {
    this.transportClass = Car;
  }

  getTransport = (customerInfo) => {
    return new this.transportClass(customerInfo);
  };
}

//Order for customer by Car
const carService = new ServiceLogistic();
console.log(
  `CarService::`,
  carService.getTransport({ name: "Trung Dep Giai", carVolume: "100 kg" })
);

//Cách 1
class Truck {
  constructor(name = "Container", doors = 2, price = "100 VND", customerInfo = {}) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

carService.transportClass = Truck;
console.log(
  `Truck Service::`,
  carService.getTransport({ name: "Trung Dep Giai", carVolume: "100 kg" })
);

// Cách 2 - Khuyến khích hơn!! 😍😍😍
class Truck extends Car {
  constructor(
    name = "Container",
    doors = 2,
    price = "100 VND",
    customerInfo = {},
    weight = "1000kg"
  ) {
    super(name, doors, price, customerInfo);
    this.weight = weight;
  }
}

class TruckService extends ServiceLogistic {
  transportClass = Truck;
}

const truckService = new TruckService();
console.log(
  `Truck Service::`,
  truckService.getTransport({ name: "Trung Dep Giai", carVolume: "100 kg" })
);
