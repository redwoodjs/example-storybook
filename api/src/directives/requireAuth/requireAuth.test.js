import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import requireAuth from './requireAuth'

describe('requireAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(requireAuth.schema).toBeTruthy()
    expect(getDirectiveName(requireAuth.schema)).toBe('requireAuth')
  })

  it('requireAuth should throw when current user is unauthenticated', () => {
    const mockExecution = mockRedwoodDirective(requireAuth, { context: {} })

    expect(mockExecution).toThrowErrorMatchingInlineSnapshot(
      `"You don't have permission to do that."`
    )
  })

  it('requireAuth should not throw when current user is authenticated', () => {
    // If you want to set values in context, pass it through e.g.
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: { currentUser: { id: 1, name: 'Lebron McGretzky' } },
    })

    expect(mockExecution).not.toThrowError()
  })
})
