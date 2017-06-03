import { compose, withProps } from 'recompose'
import { Field, reduxForm } from 'redux-form'

import { scrollToFirstError } from './utils'

const ComposedReduxForm = compose(
  withProps(({ formName, type, scrollToErrors, ...props }) => {
    let onSubmitFail = null;

    if (scrollToErrors) {
      const { doesErrorExist, scrollToError } = require(`./${type}/scrollUtils`)
      onSubmitFail = (errors) => scrollToFirstError(errors, doesErrorExist, scrollToError)
    }

    return {
      form: formName,
      onSubmitFail,
    }
  }),
  reduxForm(),
)

export {
  ComposedReduxForm as reduxForm,
  Field,
}
