// Define momo payment adapter class
class MomoPaymentAdapter {
  // Khởi tạo thông tin card
  constructor(momoPayment) {
    this.momoPayment = momoPayment;
  }

  // Define the payWithVisa method
  payWithVisa(visaPayment) {
    const convertedPayment = this.convertToVisaPayment(this.momoPayment);
    visaPayment.pay(convertedPayment);
  }

  // Define the convertToVisaPayment Method
  convertToVisaPayment(momoPayment) {
    const conversionRate = 25000; // 1USD = 25000 VND
    const visaAmount = momoPayment.amount / conversionRate;
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expiredDate: momoPayment.expiredDate,
      cvv: momoPayment.cvv,
      amount: visaAmount,
    };

    return visaPayment;
  }
}

// Define the Visa Payment
class VisaPayment {
  pay(payment) {
    console.log(
      `Paying ${payment.amount} USD with Visa Card ::: Card Number ::: ${payment.cardNumber}`
      // Todo: Payment Process
    );
  }
}

// Define the Momo Payment => Khởi tạo thông tin thẻ
class MomoPayment {
  constructor(cardNumber, expiredDate, cvv, amount) {
    this.cardNumber = cardNumber;
    this.expiredDate = expiredDate;
    this.cvv = cvv;
    this.amount = amount;
  }
}

/**
 * Chúng ta cần dùng Momo để thanh toán, và mình adapter chuyển sang Visa để thanh toán
 * đến dịch vụ cuối
 * Luồng hoạt động:
 * 1. Có thông tin thẻ momo
 * 2. Đưa vào hàm chuyển đổi, bên trong momoAdapter sẽ nhận thông tin thẻ
 * 3. Hàm visaPayment là hàm thanh toán
 * 4. Đưa hàm visaPayment vào để momoAdapter xài, thanh toán
 */

// Create MomoPayment => Tạo một thông tin card mới!
const momoPayment = new MomoPayment("121212", "12/27", "123", 200000);

// Create a momo => visa (using Adapter)
const momoAdapter = new MomoPaymentAdapter(momoPayment);

// Create a Visa Payment
const visaPayment = new VisaPayment();

momoAdapter.payWithVisa(visaPayment);
