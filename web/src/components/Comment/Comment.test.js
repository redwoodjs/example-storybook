import { render, screen, waitFor } from '@redwoodjs/testing'

import Comment from './Comment'
import { standard } from './Comment.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Comment {...standard()} />)
    }).not.toThrow()
  })

  it('Comment fragment matches snapshot', () => {
    const { asFragment } = render(<Comment {...standard()} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('Comment fragment matches snapshot when logged in as moderator', async () => {
    mockCurrentUser({
      roles: 'moderator',
    })
    const { asFragment } = render(<Comment {...standard()} />)

    await waitFor(() => {
      expect(screen.getByText('Delete')).toBeInTheDocument()
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
