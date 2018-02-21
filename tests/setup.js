// const jsdom = require('jsdom').jsdom;
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
// global.document = jsdom('');
// global.window = document.defaultView;
window.console = global.console;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
