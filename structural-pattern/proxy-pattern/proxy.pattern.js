class Boss {
  receiveRequest(offer) {
    console.log(`result::OK:: ${offer}`);
  }
}

// proxy - !
class Secretary {
  constructor() {
    this.boss = new Boss();
  }

  receiveRequest(offer) {
    //Sắp xếp các công việc, chuyển giao về cho Boss
    this.boss.receiveRequest(offer);
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer;
  }

  applyFor(target) {
    target.receiveRequest(this.offer);
  }
}

// How to use
const dev = new Developer("Trung upto 1K USD");
dev.applyFor(new Secretary());
