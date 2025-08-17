// Momento: Lưu trạng thái nhân vật!
class CharaterMomento {
  constructor(level, hp, items) {
    this.level = level;
    this.hp = hp;
    this.items = [...items];
  }

  getState() {
    return this;
  }
}

// Originator: Nhân vật game
class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.hp = 100;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  takeDamage(dmg) {
    this.hp -= dmg;
    if (this.hp < 0) this.hp = 0;
  }

  levelUp() {
    this.level++;
    this.hp += 50;
  }

  showStatus() {
    console.log(
      `⚔️  ${this.name} | Level: ${this.level} | HP: ${this.hp} | Items: ${this.items.join(", ")}`
    );
  }

  save() {
    return new CharaterMomento(this.level, this.hp, this.items);
  }

  restore(momento) {
    const state = momento.getState();
    this.level = state.level;
    this.hp = state.hp;
    this.items = state.items;
  }
}

// Caretaker - Lưu trữ lại các trạng thái
class CharacterCaretaker {
  constructor() {
    this.history = [];
  }

  saveCheckpoint(memento) {
    this.history.push(memento);
  }

  undo() {
    if (this.history.length === 0) return null;
    return this.history.pop();
  }
}

// USAGEEEE
const azusaMax = new Character("azusaMax");
const checkpoint = new CharacterCaretaker();
azusaMax.addItem("Stick");
azusaMax.addItem("Hand Knife");
azusaMax.showStatus();

console.log(`RECEIVED DAMAGE!!`);
azusaMax.takeDamage(80);
azusaMax.showStatus();

console.log(`LEVEL UP!!!`);
azusaMax.levelUp();
azusaMax.showStatus();

console.log(`SAVE CHECK POINT BEFORE HITTING SLIME!`);
checkpoint.saveCheckpoint(azusaMax.save());

console.log(`RECEIVED DAMAGE!!`);
azusaMax.takeDamage(20);
azusaMax.showStatus();

console.log(`BACK TO CHECKPOINT!`);
azusaMax.restore(checkpoint.undo());

azusaMax.showStatus();
