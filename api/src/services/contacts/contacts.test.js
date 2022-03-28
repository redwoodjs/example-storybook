import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'

import { UserInputError } from '@redwoodjs/graphql-server'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contacts', () => {
  scenario('returns all contacts', async (scenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a valid contact', async () => {
    const result = await createContact({
      input: { name: 'String', email: 'a@b.c', message: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('a@b.c')
    expect(result.message).toEqual('String')
  })

  scenario('prevents creating an invalid contact', async () => {
    expect.assertions(1)
    try {
      await createContact({
        input: { name: 'String', email: 'String', message: 'String' },
      })
    } catch (e) {
      expect(e).toMatchInlineSnapshot(
        `[GraphQLError: Can't create new contact]`
      )
    }
  })

  scenario('updates a contact', async (scenario) => {
    const original = await contact({ id: scenario.contact.one.id })
    const result = await updateContact({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a contact', async (scenario) => {
    const original = await deleteContact({ id: scenario.contact.one.id })
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
