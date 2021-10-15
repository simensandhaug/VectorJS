class Vector2D {
    x: number;
    y: number;
    constructor(x : number, y : number) {
        this.x = x || 0;
        this.y = y || 0;
    }
    add = (v: Vector2D) : Vector2D => new Vector2D(this.x + v.x, this.y + v.y);
    subtract = (v: Vector2D)  : Vector2D => new Vector2D(this.x - v.x, this.y - v.y);
    subtractValue = (value: number) : Vector2D => new Vector2D(this.x - value, this.y - value);
    multiply = (value: number) : Vector2D=> new Vector2D(this.x * value, this.y * value);
    divide = (value: number) : Vector2D => new Vector2D(this.x / value, this.y / value);
    equals = (v: Vector2D) : boolean => v.x === this.x && v.y === this.y;
    perp = () : Vector2D => new Vector2D(-this.y, this.x);
    reverse = () : Vector2D => new Vector2D(-this.x, -this.y);
    abs = () : Vector2D => new Vector2D(Math.abs(this.x), Math.abs(this.y));
    mag = () : number => Math.sqrt((this.x * this.x) + (this.y * this.y));
    dot = (v: Vector2D) : number => (this.x * v.x) + (this.y * v.y);
    distance = (v: Vector2D) : number => Math.sqrt(((this.y - v.y)**2) + ((this.x - v.x)**2));
    angle = () : number => Math.atan2(this.y, this.x);

    setAngle(angle: number) {
        this.x = Math.cos(angle) * this.mag();
        this.y = Math.sin(angle) * this.mag();
    }
}