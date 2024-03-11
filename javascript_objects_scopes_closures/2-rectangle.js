class Rectangle {
    constructor(w, h) {
        if (w <= 0 || isNaN(w)) {
            this.width = undefined;
            this.height = h;
        } else {
            this.width = w;
            this.height = h;
        }
    }
}

module.exports = Rectangle;
