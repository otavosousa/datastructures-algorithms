"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.squareArea = exports.calcArea = void 0;

var calcArea = function calcArea(r) {
  return 3.14 * Math.pow(r, 2);
};

exports.calcArea = calcArea;

var squareArea = function squareArea(s) {
  return s * s;
};

exports.squareArea = squareArea;