import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clone = new Car(); // Create an instance of Car
    const descriptors = Object.getOwnPropertyDescriptors(this);

    // Copy own properties to the clone
    Object.defineProperties(clone, descriptors);

    // Add a cloneSymbol property to the clone to identify it as a clone
    Object.defineProperty(clone, cloneSymbol, { value: true });

    return clone;
  }
}
