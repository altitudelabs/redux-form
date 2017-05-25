import React from 'react'
import Logic from './Input.logic'

// Render components
import RenderWeb from './Input.web'

// Web
const InputWebWithLogic = Logic(RenderWeb)

export const InputWeb = props => {
  return <InputWebWithLogic {...props} />
}
