import flattenDeep from 'lodash/flattenDeep'

function getErrorFieldNames(obj, name = '') {
  const errorArr = [];

  errorArr.push(Object.keys(obj).map((key) => {
    const next = obj[key]

    if (next) {
      if (typeof next === 'string') return name + key

      // Keep looking
      if (next.map) {
        errorArr.push(next.map((item, index) => getErrorFieldNames(item, `${name}${key}[${index}].`)).filter(o => o))
      }
    }

    return null;
  })
  .filter(o => o))

  return flattenDeep(errorArr)
}

export function scrollToFirstError(errors, doesErrorExist, scrollToError) {
  const errorFields = getErrorFieldNames(errors)

  for (let i = 0; i < errorFields.length; i++) {
    // The component you are scrolling to must be defined using this format, e.g. `[name="scroll-pos-username"]`
    const fieldName = `scroll-${errorFields[i]}`

    // Checking if the errorField exists in the view
    if (doesErrorExist(fieldName)) {
      scrollToError(fieldName)
      // Break when coming across the first errorField that exists in the view
      break
    }
  }
}
