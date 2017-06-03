import { scroller } from 'react-scroll'

export const doesErrorExist = (fieldName) => {
  return document.querySelectorAll(`[name="${fieldName}"]`).length ? true : false
}

export const scrollToError = (fieldName) => {
  scroller.scrollTo(fieldName, { offset: -200, smooth: true })
}

export default {
  doesErrorExist,
  scrollToError,
}
