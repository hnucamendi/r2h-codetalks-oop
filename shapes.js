function Shape() {}

Shape.prototype.calculateArea = function () {
  throw new Error("Method must be overriden in subclasses");
};

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Object.setPrototypeOf(Rectangle.prototype, Shape.prototype);

Rectangle.prototype.calculateArea = function () {
  return this.length * this.width;
};

function Circle(radius) {
  this.radius = radius;
}

Object.setPrototypeOf(Circle.prototype, Shape.prototype);

Circle.prototype.calculateArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

function Triangle(base, height) {
  this.base = base;
  this.height = height;
}

Object.setPrototypeOf(Triangle.prototype, Shape.prototype);

Triangle.prototype.calculateArea = function () {
  return (this.height * this.base) / 2;
};

const circle = new Circle(12);
const triangle = new Triangle(12, 20);

console.log(rectangle.calculateArea());
console.log(circle.calculateArea());
console.log(triangle.calculateArea());
