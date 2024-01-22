export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  //   static displayFullCurrency(n, c) {
  //     // const moneyType = n.name;
  //     // const money = c.code;
  //     return ({ moneyType, money });

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
