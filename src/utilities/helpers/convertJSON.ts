export const parseJSON = (jsonStr: string | null | undefined) => {
  try {
    if (jsonStr === null || typeof jsonStr === 'undefined') {
      return null
    }
    return JSON.parse(jsonStr)
  } catch (err) {
    console.error(`Error on parsing the JSON: ${jsonStr}`)
    return null
  }
}

export const stringifyJSON = (value: string | null | undefined) => {
  try {
    if (value === null || typeof value === 'undefined') {
      return null
    }
    return JSON.stringify(value)
  } catch (err) {
    console.error(`Error on stringifying the value ${value}`)
    return null
  }
}
