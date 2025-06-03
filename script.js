// Complete the js code
// Car constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call Car constructor with make and model
  Car.call(this, make, model);

  // Add SportsCar-specific property
  this.topSpeed = topSpeed;
}

// Set up inheritance from Car
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
