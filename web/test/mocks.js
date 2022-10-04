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

import * as util from 'util'

// ref: https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// ref: https://github.com/jsdom/jsdom/issues/2524
Object.defineProperty(window, 'TextEncoder', {
  writable: true,
  value: util.TextEncoder,
})
Object.defineProperty(window, 'TextDecoder', {
  writable: true,
  value: util.TextDecoder,
})
