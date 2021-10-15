var Vector2D = /** @class */ (function () {
    function Vector2D(x, y) {
        var _this = this;
        this.add = function (v) { return new Vector2D(_this.x + v.x, _this.y + v.y); };
        this.subtract = function (v) { return new Vector2D(_this.x - v.x, _this.y - v.y); };
        this.subtractValue = function (value) { return new Vector2D(_this.x - value, _this.y - value); };
        this.multiply = function (value) { return new Vector2D(_this.x * value, _this.y * value); };
        this.divide = function (value) { return new Vector2D(_this.x / value, _this.y / value); };
        this.equals = function (v) { return v.x === _this.x && v.y === _this.y; };
        this.perp = function () { return new Vector2D(-_this.y, _this.x); };
        this.reverse = function () { return new Vector2D(-_this.x, -_this.y); };
        this.abs = function () { return new Vector2D(Math.abs(_this.x), Math.abs(_this.y)); };
        this.mag = function () { return Math.sqrt((_this.x * _this.x) + (_this.y * _this.y)); };
        this.dot = function (v) { return (_this.x * v.x) + (_this.y * v.y); };
        this.distance = function (v) { return Math.sqrt((Math.pow((_this.y - v.y), 2)) + (Math.pow((_this.x - v.x), 2))); };
        this.angle = function () { return Math.atan2(_this.y, _this.x); };
        this.x = x || 0;
        this.y = y || 0;
    }
    Vector2D.prototype.setAngle = function (angle) {
        this.x = Math.cos(angle) * this.mag();
        this.y = Math.sin(angle) * this.mag();
    };
    return Vector2D;
}());
