import { render } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Comment />)
    }).not.toThrow()
  })

  it('Comment fragment matches snapshot', () => {
    const { asFragment } = render(<Comment />)
    expect(asFragment()).toMatchSnapshot()
  })
})
