import { render } from '@redwoodjs/testing/web'

import BlogLayout from './BlogLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BlogLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogLayout />)
    }).not.toThrow()
  })

  it('fragment matches snapshot', () => {
    const { asFragment } = render(<BlogLayout />)
    expect(asFragment()).toMatchSnapshot()
  })
})
