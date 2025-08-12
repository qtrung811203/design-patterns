// level 0 ❌❌❌
// Không sử dụng Factory Pattern
const serviceLogistic = (cargoVolume) => {
  //Nhận vào lượng hàng hóa vận chuyển
  switch (cargoVolume) {
    case "10": {
      return {
        name: "Truck 10",
        doors: 6,
        price: "100.000 VND",
      };
    }
    case "100": {
      return {
        name: "Truck 100",
        doors: 16,
        price: "1.000.000 VND",
      };
    }
  }
};

// Usage
console.log(serviceLogistic("100"));
