export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        // example output: TestCar { _brand: undefined, _motor: undefined, _color: undefined }
        return new Car(Symbol.for(this._brand), Symbol.for(this._motor), Symbol.for(this._color));
    }
}