import {Circle} from "./Circle";

class Cylinder extends Circle {
    private _height: number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    getVolume() {
        return (Math.PI*this.radius*2*this.height)
    }
}
let myCylinder = new Cylinder(5,'blue',4);
console.log(myCylinder.getVolume())