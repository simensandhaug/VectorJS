export default class Vector2D {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    add = v => new Vector2D(this.x + v.x, this.y + v.y);
    subtract = v => new Vector2D(this.x - v.x, this.y - v.y);
    subtractValue = value => new Vector2D(this.x - value, this.y - value);
    multiply = value => new Vector2D(this.x * value, this.y * value);
    divide = value => new Vector2D(this.x / value, this.y / value);
    equals = v => v.x === this.x && v.y === this.y;
    perp = () => new Vector2D(-this.y, this.x);
    reverse = () => new Vector2D(-this.x, -this.y);
    abs = () => new Vector2D(Math.abs(this.x), Math.abs(this.y));
    mag = () => Math.sqrt((this.x * this.x) + (this.y * this.y));
    dot = v => (this.x * v.x) + (this.y * v.y);
    distance = v => Math.sqrt(((this.y - v.y) ** 2) + ((this.x - v.x) ** 2));
    angle = () => Math.atan2(this.y, this.x);

    setAngle(angle) {
        this.x = Math.cos(angle) * this.mag();
        this.y = Math.sin(angle) * this.mag();
    }
}