export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    } else {
      this._size = size;
    }

    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    } else {
      this._location = location;
    }
  }

  toString() {
    return `${this._location}`;
  }

  valueOf() {
    return this._size;
  }
}
