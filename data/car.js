class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.isTrunkOpen = carDetails.isTrunkOpen;
  }
  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
  }
  go() {
    if (this.speed + 5 > 200 || this.isTrunkOpen) {
      return;
    }
    this.speed += 5;
  }
  brake() {
    if (this.speed - 5 < 0) {
      return;
    }
    this.speed -= 5;
  }
  openTrunk() {
    this.isTrunkOpen = true;
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;
  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if (this.speed + this.acceleration > 300) {
      return;
    }
    this.speed += this.acceleration;
  }
}

const car1 = new Car({
  brand: "Toyota",
  model: "Corolla",
});
const car2 = new Car({
  brand: "Tesla",
  model: "Model 3",
});

car1.go();
car1.go();
car2.brake();

car1.displayInfo();
car2.displayInfo();
