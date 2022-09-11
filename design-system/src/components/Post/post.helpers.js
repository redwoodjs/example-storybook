import humanize from 'humanize-string'

//TODO see why these anonymous helper functions are no longer used

export const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

export const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}
