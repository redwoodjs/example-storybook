import { render } from '@redwoodjs/testing/web'
import { standard } from './Article.mock'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article article={standard().article} />)
    }).not.toThrow()
  })

  it('fragment matches snapshot', () => {
    const { asFragment } = render(<Article article={standard().article} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
