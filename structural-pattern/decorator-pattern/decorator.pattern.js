// Tạo component interface!~
class Player {
  attack() {
    console.log("Boom! Crystal!");
  }
}

// Class Decorator -> Class này sẽ giữ tham chiếu đến đối tượng gốc
class PlayerDecorator {
  constructor(player) {
    this.player = player;
  }

  attack() {
    this.player.attack();
  }
}

// Tạo ra các decorator cụ thể hơn
class PowerUpDecorator extends PlayerDecorator {
  attack() {
    console.log("Increase strength!!");
    super.attack();
  }
}

class FireBullet extends PlayerDecorator {
  attack() {
    console.log("Fireeee!!");
    super.attack();
  }
}

// Sử dụng thôi!
const player = new Player();

// Power up player!
const powerUpPlayer = new PowerUpDecorator(player);
powerUpPlayer.attack();

//Power up player and can fire bullet
const fireBulletPlayer = new FireBullet(powerUpPlayer);
fireBulletPlayer.attack();
