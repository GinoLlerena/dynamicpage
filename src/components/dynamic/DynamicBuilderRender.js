import React, {Fragment, useContext} from 'react'
import cond from 'lodash/fp/cond'
import map from 'lodash/fp/map'
import {DynamicContext} from './DynamicContextProvider'
import ContactForm from '../ContactForm'

const isFinalNode = Element => (['img','input'].includes(Element))
const isNull = Element => (Element === null)
const isNotFinalNode = Element => Element && !isFinalNode(Element)
const isContactForm = Element => Element === 'ContactForm'

function getChildren(descendents) {
  return (map(item => (<GetNode key={item} valueKey={item}/>))(descendents))
}

function getClassName(isHovered, isSelected, {className = ''} = {}){
  if(isSelected){
    return `${className} border border-danger`
  } else if(isHovered){
    return `${className} border-dotted`
  } else {
    return className
  }
}

function GetNode(props) {
  const { valueKey } = props;
  const [content, hoverKeys, selectElement] = useContext(DynamicContext)

  const myElement = content[valueKey]
  const { element: Element, children, descendents, props: _props, level } = myElement
  const isHovered = !!(hoverKeys?.[valueKey])
  const isSelected = !!(selectElement?.[valueKey])
  const myProps = { ..._props, 'data-key': valueKey, 'data-level': level, className: getClassName(isHovered, isSelected, _props) }
  return cond([
    [isContactForm, ()=> <ContactForm {...myProps} />],
    [isFinalNode, () => (<Element key={valueKey} {...myProps}>{null}</Element>)],
    [isNotFinalNode, () => (<Element key={valueKey} {...myProps}>{children ? children : getChildren(descendents)}</Element>)],
    [isNull, () => <Fragment>{children ? children : getChildren(descendents)}</Fragment>]
  ])(Element)
}

function DynamicBuilderRender(props){
  const { valueKey } = props
  return(
      <GetNode valueKey={valueKey} />
    )
}

export default DynamicBuilderRender
