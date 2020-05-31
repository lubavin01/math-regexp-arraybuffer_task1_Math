/* eslint-disable no-underscore-dangle */

export default class Character {
  constructor(distance) {
    this.distance = distance;
    this._attack = 100;
    this.stoned = false;
  }

  get attack() {
    return this._attack
          - (this._attack * 0.1 * (this.distance - 1))
          - (this.stoned ? this._attack * 0.01 * Math.log2(this.distance) * 5 : 0);
  }

  set attack(value) {
    this._attack = value;
  }
}
