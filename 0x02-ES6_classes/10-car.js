const cloneSymbol = Symbol("clone");

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = Object.create(Object.getPrototypeOf(this));
    const descriptors = Object.getOwnPropertyDescriptors(this);

    // Copy own properties to the clone
    Object.defineProperties(clone, descriptors);

    // Add a cloneSymbol property to the clone to identify it as a clone
    Object.defineProperty(clone, cloneSymbol, { value: true });

    return clone;
  }

  get isClone() {
    return this[cloneSymbol] === true;
  }
}
