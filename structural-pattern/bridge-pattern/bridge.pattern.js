// Define PaymentProcess => chứa phương thức thanh toán
class PaymentProcess {
  pay(amount) {}
}

// Define Visa Payment Process
class VisaPaymentProcess extends PaymentProcess {
  constructor(cardNumber, expiredDate, cvv) {
    super();
    this.cardNumber = cardNumber;
    this.expiredDate = expiredDate;
    this.cvv = cvv;
  }

  pay(amount) {
    console.log(`Paying ${amount} USD with Visa ::: Card Number ::: ${this.cardNumber}`);
  }
}

// Define Momo Payment Process
class MomoPaymentProcess extends PaymentProcess {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }

  pay(amount) {
    console.log(`Paying ${amount} USD with Momo ::: Phone Number ::: ${this.phoneNumber}`);
  }
}

// Define member registration -> hàm đăng ký
class MemberRegistration {
  constructor(paymentProcess) {
    this.paymentProcess = paymentProcess;
  }

  register() {
    const amount = 100;
    this.paymentProcess.pay(100);
    console.log(`Register for Vtuber Successfully~~~!`);
  }
}

// Giả sử thanh toán bằng visa
const visaPaymentProcess = new VisaPaymentProcess("123123", "12/27", "123");
const membership = new MemberRegistration(visaPaymentProcess);
membership.register();

// Giả sử thanh toán bằng momo
const momoPaymentProcess = new MomoPaymentProcess("085885785");
const membershipMomo = new MemberRegistration(momoPaymentProcess);
membershipMomo.register();
