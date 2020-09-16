// import {
//     EventType,
//     addDisposableListener,
//     addClass,
//     removeClass,
//     removeNode,
//     append,
//     $,
//     hasClass,
//     EventHelper,
//     EventLike
// } from "vs/base/browser/dom";
console.log('mocking...')
module.exports = {
  EventType : {},
  EventHelper : {},
  EventLike : {},
  addDisposableListener : jest.fn(),
  addClass : jest.fn(),
  removeClass : jest.fn(),
  removeNode : jest.fn(),
  append : jest.fn(),
  $ : jest.fn(),
  hasClass : jest.fn(),
}


export const addDisposableListener = jest.fn();
export const addClass = jest.fn();
export const removeClass = jest.fn();
export const removeNode = jest.fn();
export const append = jest.fn();
export const $ = jest.fn();
export const hasClass = jest.fn();
