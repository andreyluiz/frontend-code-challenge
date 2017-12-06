const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

require('babel-core/register')();

Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const exposedProperties = ['window', 'navigator', 'document'];

global.document = new JSDOM().window.document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

documentRef = document; // eslint-disable-line
