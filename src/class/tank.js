export class Player {
  constructor(name, x, y, type, health) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.type = type;
    this.health = health;
  }

  toObject() {
    return {
      name: this.name, x: this.x, y: this.y, type: this.type, health: this.health
    };
  }
}