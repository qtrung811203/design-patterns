// Lớp để có thể xây dựng nên!
class Character {
  constructor(charater) {
    this.name = charater.name;
    this.role = charater.role;
    this.weapon = charater.weapon;
    this.artifacts = charater.artifacts;
    this.level = charater.level;
    this.skills = charater.skills;
  }

  getInformation() {
    let charater = `📃 Name: ${this.name} \n`;
    charater += `- Role: ${this.role}\n`;
    charater += `- Weapon: ${this.weapon}\n`;
    charater += `- Artifacts: ${this.artifacts}\n`;
    charater += `- Level: ${this.level}\n`;
    charater += `- Skills: ${this.skills}\n`;

    return charater;
  }
}

// Builder
class CharacterBuilder {
  constructor() {
    this.name = "";
    this.role = "";
    this.weapon = "";
    this.artifacts = [];
    this.level = 1;
    this.skills = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }
  setRole(role) {
    this.role = role;
    return this;
  }
  setWeapon(weapon) {
    this.weapon = weapon;
    return this;
  }
  addArtifacts(artifact) {
    this.artifacts.push(artifact);
    return this;
  }
  setLevel(level) {
    this.level = level;
    return this;
  }

  addSkill(skill) {
    this.skills.push(skill);
    return this;
  }

  build() {
    return new Character(this);
  }
}

// Usage!!
const charaterBuilder = new CharacterBuilder();
const hanabi = charaterBuilder
  .setName("Hanabi - Sparkle")
  .setRole("Harmony")
  .setWeapon("Legs?")
  .setLevel(9999)
  .addArtifacts("The Call Of Nature")
  .addArtifacts("The Knowledge")
  .addSkill("Kick!")
  .addSkill("Punch!")
  .build();

const seele = charaterBuilder
  .setName("Seele")
  .setRole("Quantum")
  .setWeapon("Scythe")
  .setLevel(9999)
  .addArtifacts("Sunnden")
  .addArtifacts("Alife")
  .addSkill("Disapear among the sea?")
  .addSkill("It's my turn!")
  .build();

console.log(hanabi.getInformation());
console.log(seele.getInformation());
