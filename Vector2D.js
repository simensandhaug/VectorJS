class Vector2D {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    add = (v1, v2) => new Vector2D(v1.x + v2.x, v1.y + v2.y);
    subtract = (v1, v2) => new Vector2D(v1.x - v2.x, v1.y - v2.y);
    subtractValue = (v, value) => new Vector2D(v.x - value, v.y - value);
    multiply = (v, value) => new Vector2D(v.x * value, v.y * value);
    divide = (v, value) => new Vector2D(v.x / value, v.y / value);
    equals = (v1, v2) => v1.x === v2.x && v1.y === v2.y;
    perp = v => new Vector2D(-v.y, v.x);
    reverse = v => new Vector2D(-v.x, -v.y);
    abs = v => new Vector2D(Math.abs(v.x), Math.abs(v.y));
    mag = v => Math.sqrt((v.x * v.x) + (v.y * v.y));
    dot = (v1, v2) => (v1.x * v2.x) + (v1.y * v2.y);
    distance = (v1, v2) => Math.sqrt(((v2.y - v1.y)**2) + ((v2.x - v1.x)**2));
    angle = v => Math.atan2(v.y, v.x);

    setAngle(angle) {
        this.x = Math.cos(angle) * this.magnitude(this);
        this.y = Math.sin(angle) * this.magnitude(this);
    }
}