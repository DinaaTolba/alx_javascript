class Rectangle {
    constructor(w, h) {
        if (w <= 0 || isNaN(w)) {
            return {}; // returning an empty object as per the requirement
        }
        this.width = w;
        this.height = h;
    }
}

module.exports = Rectangle;
