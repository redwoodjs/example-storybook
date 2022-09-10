import { render } from '@redwoodjs/testing/web'

import HomePage from './HomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })

  // TODO: figure out how to render things other than the loading state (RTL's rerender() did not seem to work)
  it('fragment matches snapshot', () => {
    const { asFragment } = render(<HomePage />)
    expect(asFragment()).toMatchSnapshot()
  })
})
