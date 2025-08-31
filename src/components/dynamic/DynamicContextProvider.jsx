import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const DynamicContext = createContext({});
export const ContentContext = createContext({});
export const UIContext = createContext({ hoverKeys: {}, selectElement: {} });

const DynamicContextProvider = props => {
  const { content, hoverKeys, selectElement } = props

  return (
    <ContentContext.Provider value={content}>
      <UIContext.Provider value={{ hoverKeys, selectElement }}>
        {/* Legacy combined context for backward compatibility */}
        <DynamicContext.Provider value={[content, hoverKeys, selectElement]}>
          {props.children}
        </DynamicContext.Provider>
      </UIContext.Provider>
    </ContentContext.Provider>
  )
}

DynamicContextProvider.defaultProps = {
  content: {}
}

DynamicContextProvider.propTypes = {
  content: PropTypes.object
}

export default DynamicContextProvider
