#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0) {
        // If w or h is not positive, create an empty object
        return {};
      } else {
        // Otherwise, initialize the instance attributes with the provided values
        this.width = w;
        this.height = h;
      }
    }
  }
  
  module.exports = Rectangle;
  