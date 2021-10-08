"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = exports.mult = void 0;

// npx babel chapter_2/22.4-modules.js --out-dir lib
var sum = function sum(n1, n2) {
  return n1 + n2;
};

exports.sum = sum;

var mult = function mult(n1, n2) {
  return n1 * n2;
};

exports.mult = mult;