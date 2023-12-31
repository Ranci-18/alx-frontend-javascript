export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw TypeError('Size must be a number');
    if (typeof location !== 'string') throw TypeError('Location must be a string');
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](castTo) {
    if (castTo === 'number') return this._size;
    return this._location;
  }
}
