export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this_name;
  }
  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    rturn `${this._name} (${this._code})`;
  }
}
