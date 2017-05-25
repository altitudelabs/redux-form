import React from 'react'
import Logic from './Submit.logic'

// Render components
import RenderWeb from './Submit.web'

// Web
const SubmitWebWithLogic = Logic(RenderWeb)

export const SubmitWeb = props => {
  return <SubmitWebWithLogic {...props} />
}
