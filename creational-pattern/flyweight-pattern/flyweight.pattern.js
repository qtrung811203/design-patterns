// Flyweight -> Thứ cần làm nhẹ!
class CharacterModel {
  constructor(model) {
    this.model = model;
  }

  render(x, y, hp) {
    console.log(
      `Render charater model [${this.model}] at position x: ${x} | y: ${y} with hp: ${hp}`
    );
  }
}

// Flyweight Factory
class CharaterFactory {
  constructor() {
    this.models = {};
  }

  getModel(modelName) {
    if (!this.models[modelName]) {
      this.models[modelName] = new CharacterModel(modelName);
      console.log(`Tạo mới model: ${modelName}`);
    }
    return this.models[modelName];
  }
}

// Cho người dùng sử dụng này để tạo Character
class Character {
  constructor(x, y, hp, model) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.model = model;
  }

  render() {
    this.model.render(this.x, this.y, this.hp);
  }
}

// USING //
const characterFactory = new CharaterFactory();
const knight = new CharacterModel("knight");
const ranger = new CharacterModel("ranger");

const modelKnight = characterFactory.getModel("knight");
const modelRanger = characterFactory.getModel("ranger");

const army = [
  new Character(1, 1, 120, modelKnight),
  new Character(2, 2, 130, modelKnight),
  new Character(3, 3, 150, modelKnight),
  new Character(4, 4, 90, modelRanger),
  new Character(5, 5, 70, modelRanger),
  new Character(6, 6, 80, modelRanger),
];

army.forEach((character) => {
  character.render();
});
