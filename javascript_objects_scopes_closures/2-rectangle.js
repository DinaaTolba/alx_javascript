#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w < 0 || h < 0 || isNaN(w) || isNaN(h)) {
        // If w or h is negative or not a number, initialize the instance attributes to 0
        this.width = 0;
        this.height = 0;
      } else {
        // Otherwise, initialize the instance attributes with the provided values
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;
  