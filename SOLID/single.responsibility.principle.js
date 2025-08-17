// Mỗi Class chỉ chịu trách nhiệm về 1 trách nhiệm duy nhất

// Using Wrong ❌❌❌
// User Service is handle two jobs: Create User & Send Email
class UserService {
  createUser(name) {
    console.log(`Create user name: ${name}`);
    this.sendEmail(name);
  }

  sendEmail(name) {
    console.log(`Send email to: ${name}`);
  }
}

// Using Right ✅✅✅
// Tách riêng Email Service
class EmailService {
  sendEmail(name) {
    console.log(`Send email to: ${name}`);
  }
}

class UserServiceUsingS {
  constructor(emailService) {
    this.emailService = emailService;
  }

  createUser(name) {
    console.log(`Create user name: ${name}`);
    this.emailService.sendEmail(name);
  }
}

// Sử dụng!
const emailService = new EmailService();
const userService = new UserService(emailService);
userService.createUser("Trung Dep Trai");
