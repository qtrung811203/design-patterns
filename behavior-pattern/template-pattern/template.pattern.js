// Sử dụng template (abstract class)
/**
 Định nghĩa bộ khung (template) cho 1 thuật toán ở class cha, 
 nhưng cho phép các class con ghi đè 1 số bước
 */
class CharaterAttack {
  // attack() include 3 steps (bộ khung gồm 3 bước!)
  attack() {
    this.prepare();
    this.useSkill();
    this.finish();
  }

  prepare() {
    console.log(`::: Enter attack mode! :::`);
  }

  useSkill() {
    throw new Error("Subclass must is implement");
  }

  finish() {
    console.log(`::: Finish Attack!! :::`);
  }
}

// Concrete Class
class Warrior extends CharaterAttack {
  useSkill() {
    console.log(`WARRIOR USING SKILLS: HARD STRIKE!!`);
  }
}

class Mage extends CharaterAttack {
  useSkill() {
    console.log(`MAGE USING SKILLS: FIRE BALL!!`);
  }
}

const warrior = new Warrior();
const mage = new Mage();

warrior.attack();
mage.attack();
