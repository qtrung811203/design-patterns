/**
 * Sử dụng kỹ thuật Round Robin
 * Round-Robin trong Load Balancer là phương pháp phân phối
 * các request đến máy chủ theo một cách tuần tự (như vòng tròn)
 * Ví dụ: Có 5 request, và có 3 máy chủ
 *  - Request-1 => Server01
 *  - Request-2 => Server02
 *  - Request-3 => Server03
 *  - Request-4 => Server01
 *  - Request-5 => Server02
 *
 */

class RoundRobin {
  constructor() {
    if (RoundRobin.instance) {
      return RoundRobin.instance;
    }
    this.servers = [];
    this.index = 0;
    RoundRobin.instance = this;
  }

  addServer(server) {
    this.servers.push(server);
  }

  getNextServer() {
    if (!this.servers) {
      throw new Error("No server found!");
    }

    const server = this.servers[this.index];

    // Thuật toán Modules (Có thể tra mạng nếu quên!)
    this.index = (this.index + 1) % this.servers.length;
    return server;
  }
}

const loadBalancer01 = new RoundRobin();
const loadBalancer02 = new RoundRobin();

console.log(loadBalancer01 === loadBalancer02); //True => return 1 instance

loadBalancer01.addServer("server_01");
loadBalancer01.addServer("server_02");

loadBalancer02.addServer("server_03");
loadBalancer02.addServer("server_04");

//Get server
console.log(loadBalancer01.getNextServer()); //return server_01
console.log(loadBalancer01.getNextServer()); //return server_02
console.log(loadBalancer02.getNextServer()); //return server_03
console.log(loadBalancer02.getNextServer()); //return server_04
