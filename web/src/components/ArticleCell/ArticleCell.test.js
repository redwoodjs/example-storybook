import { screen, render, waitFor } from '@redwoodjs/testing/web'

import { Loading, Empty, Failure, Success } from './ArticleCell'
import { standard } from './ArticleCell.mock'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ArticleCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('Loading fragment matches snapshot', () => {
    const { asFragment } = render(<Loading />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('Empty fragment matches snapshot', () => {
    const { asFragment } = render(<Empty />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('Failure fragment matches snapshot', () => {
    const { asFragment } = render(<Failure error={new Error('Oh no')} />)
    expect(asFragment()).toMatchSnapshot()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing/web'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success article={standard().article} />)
    }).not.toThrow()
  })

  it('Success fragment with loading comments matches snapshot', () => {
    const { asFragment } = render(<Success article={standard().article} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Success fragment matches snapshot', async () => {
    const { asFragment } = render(<Success article={standard().article} />)
    await waitFor(() => {
      expect(
        screen.getByText('Cowabunga dudes. This is the first comment!')
      ).toBeInTheDocument()
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
