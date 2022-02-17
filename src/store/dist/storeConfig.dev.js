"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var reducers = (0, _redux.combineReducers)({
  numeros: function numeros(state, action) {
    return {
      min: 1,
      max: 10
    };
  }
});

function storeConfig() {
  return (0, _redux.createStore)(reducers);
}

var _default = storeConfig;
exports["default"] = _default;