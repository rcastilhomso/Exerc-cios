class Character {
  constructor(name, health, attackPower, defense) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.defense = defense;
    this.type = "Personagem";
  }

  attack(target) {
    const damage = this.attackPower - target.defense;
    target.health -= damage;
    return `${this.name} atacou ${target.name} com ${damage} de dano.\n${target.name} tem ${target.health} de vida restante`;
  }
}

class Thief extends Character {
  constructor(name, health, attackPower, defense) {
    super(name, health, attackPower, defense);
    this.type = "Gatuno";
  }
  attack(target) {
    const damage = 2 * (this.attackPower - target.defense);
    target.health -= damage;
    return `${this.name} atacou ${target.name} com ${damage} de dano. \n${target.name} tem ${target.health} de vida restante`;
  }
}

class Mage extends Character {
  constructor(name, health, attackPower, defense, magicPower) {
    super(name, health, attackPower, defense);
    this.magicPower = magicPower;
    this.type = "Mago";
  }

  attack(target) {
    const damage = this.attackPower + this.magicPower - target.defense;
    target.health -= damage;
    return `${this.name} atacou ${target.name} com ${damage} de dano. \n${target.name} tem ${target.health} de vida restante}`;
  }
  extendHP(target) {
    target.health += 2 * this.magicPower;
  }
}

class Warrior extends Character {
  constructor(name, health, attackPower, defense, shield) {
    super(name, health, attackPower, defense);
    this.shield = shield;
    this.position = "attack";
    this.type = "Guerreiro";
  }

  attack(target) {
    if (this.position === "defense") {
      return `O personagem ${this.name} não está na posição de ataque. Por isso não pode atacar`;
    }
    const damage = this.attackPower - target.defense;
    target.health -= this.attackPower - target.defense;
    return `${this.name} atacou ${target.name} com ${damage} de dano \n${target.name} tem ${target.health} de vida restante}`;
  }
  changePosition() {
    if (this.position === "attack") {
      this.position = "defense";
      this.defense += this.shield;
      return `${this.name} mudou para a posição de defesa`;
    } else {
      this.position = "attack";
      this.defense = this.defense;
      return `${this.name} mudou para a posição de ataque`;
    }
  }
}

const character01 = new Character("Personagem 01", 100, 10, 5);
