export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
    if (!this.evacuationWarningMessage) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }
  get sqft() {
    return this._sqft;
  }
}
