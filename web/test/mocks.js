var util = require('util')

// fix for 'ResizeObserver is not defined' in storyshots
// see: https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// see: https://github.com/que-etc/resize-observer-polyfill/issues/50#issuecomment-998746784
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(() => 'Mocking works'),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
})
// https://github.com/jsdom/whatwg-encoding/pull/11/files
Object.defineProperty(window, 'TextEncoder', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    // https://github.com/avaer/text-encoder/blob/master/index.js
    encode: jest.fn(
      (str) => {
        if (typeof str !== 'string') {
          throw new TypeError('passed argument must be of tye string')
        }
        var binstr = unescape(encodeURIComponent(str)),
          arr = new Uint8Array(binstr.length)
        const split = binstr.split('')
        for (let i = 0; i < split.length; i++) {
          arr[i] = split[i].charCodeAt(0)
        }
        return arr
      }
    ),
  })),
})
