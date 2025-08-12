// Using simple factory pattern
// Level XXX

class ServiceLogistic {
  constructor(doors = 6, price = "100.000 VND", name = "Truck 10") {
    (this.doors = doors), (this.price = price), (this.name = name);
  }

  static getTransport = (cargoVolume) => {
    switch (cargoVolume) {
      case "10":
        return new ServiceLogistic();
      case "100":
        return new ServiceLogistic(16, "1.000.000 VND", "Truck 100");
    }
  };
}

console.log(`Level XXX :::`, ServiceLogistic.getTransport("10"));

//Advantages & Disadvantages
/**
 * Simple Factory Pattern
 * Ưu điểm:
 * - Cung cấp một khuôn mẫu tập trung để tạo đối tượng.
 * - Client không cần biết chi tiết cách khởi tạo đối tượng, chỉ cần gọi factory.
 *
 * Nhược điểm:
 * - hàm getTransport đảm nhiệm nhiều vấn đề nặng nề!
 * - Ví dụ nếu thêm các dịch vụ vận chuyển thì phải mở rộng getTransport
 * => Vi phạm nguyên tắc đóng mở (OPC - Open Close Principle trong SOLID: Mở rộng được
 * nhưng không cần sửa đổi code hiện tại!)
 */
