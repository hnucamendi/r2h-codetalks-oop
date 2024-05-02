class Feline {
  energy = 101;
  constructor(name, age, nickname) {
    this.name = name;
    this.age = age;
    this.nickname = nickname;
  }

  meow() {
    console.log(`Meow my name is ${this.name}`);
    this.energy += 10;
  }
  purr() {
    console.log("purr");
    this.energy += 50;
  }

  shower() {
    if (this.#hasEnergy(50)) {
      console.log("lick lick lick...");
      setTimeout(() => {
        this.energy -= 50;
        console.log("lick... done showering");
      }, 5000);
    }
  }

  zoomies() {
    if (this.energy > 100) {
      this.energy /= 2;
      setInterval(() => {
        console.log("ZOOOOOOOOOOOOOOOOOOOM 🙀");
      }, 250);
    }
  }

  #hasEnergy(requiredEnergy) {
    if (this.energy - requiredEnergy <= 0) return false;
    return true;
  }
}

class OrangeCat extends Feline {
  energy = 500;
  constructor(name, age, nickname) {
    super(name, age, nickname);
  }
  orangeAttack() {
    console.log("💣 World Destroyed 🧨");
  }
}

class MaineCoon extends Feline {
  energy = 250;
  constructor(name, age, nickname) {
    super(name, age, nickname);
  }

  maineAttack() {
    console.log("scratch 😴");
  }
}

const pedro = new OrangeCat("Pedro", 2, "Goblin");
const toby = new MaineCoon("Toby", 3, "Toe-Bean");

pedro.meow();
toby.meow();
pedro.orangeAttack();
toby.maineAttack();
