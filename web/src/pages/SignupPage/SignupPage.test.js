import { render } from '@redwoodjs/testing/web'

import SignupPage from './SignupPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SignupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignupPage />)
    }).not.toThrow()
  })

  it('fragment matches snapshot', () => {
    const { asFragment } = render(<SignupPage />)
    expect(asFragment()).toMatchSnapshot()
  })
})
