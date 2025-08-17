/**
1. Các module cấp cao không nên phụ thuộc vào các module cấp thấp.
Cả 2 nên phụ thuộc vào abstraction.

2. Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại. 
(Các class giao tiếp với nhau thông qua interface, không phải thông qua implementation.)
 */

// Using Wrong ❌❌❌
class MySQLDatabase {
  save(data) {
    console.log(`Save to database: ${data}`);
  }
}

class UserServiceWrong {
  constructor() {
    this.db = new MySQLDatabase(); // Code cứng X X X
  }

  saveUser(data) {
    this.db.save(data);
  }
}

// Using Right ✅✅✅
class Database {
  save(data) {}
}

class MongoDbDatabase {
  save(data) {
    console.log(`Saving with mongoDbDatabase: ${data}`);
  }
}

class PostgresDatabase {
  save(data) {
    console.log(`Saving with PostgresDatabase: ${data}`);
  }
}

class UserServiceDIP {
  constructor(database) {
    this.database = database;
  }

  saveUser(data) {
    this.database.save(data);
  }
}

// Using
const mongodb = new MongoDbDatabase();
const postgresdb = new PostgresDatabase();

const userServiceDIP = new UserServiceDIP(postgresdb);
// const userServiceDIP = new UserServiceDIP(mongodb); // using mongodb
userServiceDIP.saveUser("Trung");
