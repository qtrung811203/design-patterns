// Receiver - Người nhận thực hiện lệnh
class Character {
  move(direction) {
    console.log(`MOVE ::: ${direction}`);
  }

  attack() {
    console.log(`ATTACK ::: FIREBALL `);
  }

  defend() {
    console.log(`DEFEND ::: GODLY SHIELD`);
  }
}

// Class interface for Command
class Command {
  execute() {}
  undo() {}
}

// Command using Character Class to execute!
class MoveCommand extends Command {
  constructor(character, direction) {
    super();
    this.direction = direction;
    this.character = character;
  }
  execute() {
    this.character.move(this.direction);
  }

  undo() {
    console.log(`UNDO ::: ATTACK`);
  }
}

class DefendCommand extends Command {
  constructor(character) {
    super();
    this.character = character;
  }
  execute() {
    this.character.defend();
  }

  undo() {
    console.log(`UNDO ::: DEFEND`);
  }
}

class AttackCommand extends Command {
  constructor(character) {
    super();
    this.character = character;
  }
  execute() {
    this.character.attack();
  }

  undo() {
    console.log(`UNDO ::: ATTACK`);
  }
}

// Commander (Or Invoker!)
class Commander {
  constructor() {
    this.commands = [];
  }

  execute(command) {
    command.execute();
    this.commands.push(command);
  }

  undo() {
    this.commands.pop().undo();
  }
}

// Client
const hanabi = new Character("Hanabii");
const moveCommand = new MoveCommand(hanabi, "EAST");
const attackCommand = new AttackCommand(hanabi);
const defendCommand = new DefendCommand(hanabi);

const commander = new Commander();
commander.execute(moveCommand);
commander.execute(attackCommand);
commander.execute(defendCommand);
commander.execute(attackCommand);

console.log("UNDO COMMANDS!");
commander.undo();
