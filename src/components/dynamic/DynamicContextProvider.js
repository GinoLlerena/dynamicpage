import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const DynamicContext = createContext({});

const DynamicContextProvider = props => {
  const { content, hoverKeys, selectElement } = props

  return (
    <DynamicContext.Provider value={[content, hoverKeys, selectElement]}>
      {props.children}
    </DynamicContext.Provider>
  )
}

DynamicContextProvider.defaultProps = {
  content: {}
}

DynamicContextProvider.propTypes = {
  content: PropTypes.object
}

export default DynamicContextProvider
