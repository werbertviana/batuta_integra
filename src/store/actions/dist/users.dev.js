"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateItems = updateItems;

function updateItems(novoItem) {
  return {
    type: 'UPDATE_ITEMS',
    payload: novoItem
  };
}