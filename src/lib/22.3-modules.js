"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// npx babel chapter_2/22.3-modules.js --out-dir lib
var calcDouble = function calcDouble(num) {
  return num * 2;
};

var _default = calcDouble;
exports["default"] = _default;