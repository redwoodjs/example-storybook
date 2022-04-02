import { screen, render, waitFor } from '@redwoodjs/testing/web'
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

  it('fragment when summary prop set to true matches snapshot', () => {
    const { asFragment } = render(
      <Article summary={true} article={standard().article} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('fragment when summary prop set to false matches snapshot', () => {
    const { asFragment } = render(
      <Article summary={false} article={standard().article} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('fragment when summary prop set to false and async/await matches snapshot', async () => {
    const { asFragment } = render(
      <Article summary={false} article={standard().article} />
    )
    await waitFor(() => {
      expect(
        screen.getByText('Cowabunga dudes. This is the first comment!')
      ).toBeInTheDocument()
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
