import React, {Fragment, useContext, memo, useMemo} from 'react'
import cond from 'lodash/fp/cond'
import map from 'lodash/fp/map'
import {ContentContext, UIContext} from './DynamicContextProvider'
import ContactForm from '../ContactForm'

// HTML void elements that must not have children
const VOID_ELEMENTS = new Set([
  'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'
])

const componentRegistry = {
  ContactForm: ContactForm,
}

const isFinalNode = Element => (typeof Element === 'string' && VOID_ELEMENTS.has(Element))
const isNull = Element => (Element === null)
const isNotFinalNode = Element => Element && !isFinalNode(Element)
const isContactForm = Element => Element === 'ContactForm'

function getChildren(descendents) {
  return (map(item => (<GetNode key={item} valueKey={item}/>))(descendents))
}

function getClassName(isHovered, isSelected, {className = ''} = {}){
  if (isSelected) {
    return `${className} border border-red-500`;
  } else if (isHovered) {
    return `${className} border border-dotted border-gray-400`;
  } else {
    return className;
  }
}

function GetNode(props) {
  const { valueKey } = props;
  const content = useContext(ContentContext)
  const { hoverKeys, selectElement } = useContext(UIContext)

  const myElement = content[valueKey]
  const { element: Element, children, descendents, props: _props, level } = myElement
  const isHovered = !!(hoverKeys?.[valueKey])
  const isSelected = !!(selectElement?.[valueKey])
  const myProps = { ..._props, 'data-key': valueKey, 'data-level': level, className: getClassName(isHovered, isSelected, _props) }

  const CustomComponent = useMemo(() => componentRegistry[Element], [Element])
  const isValidIntrinsic = typeof Element === 'string'

  return cond([
    [isContactForm, () => <ContactForm {...myProps} />],
    [() => !!CustomComponent, () => <CustomComponent {...myProps} />],
    [isFinalNode, () => (isValidIntrinsic ? <Element key={valueKey} {...myProps}>{null}</Element> : <div key={valueKey} {...myProps} />)],
    [isNotFinalNode, () => (
      isValidIntrinsic ? (
        <Element key={valueKey} {...myProps}>
          {children ? children : getChildren(descendents)}
        </Element>
      ) : (
        <div key={valueKey} {...myProps}>
          {children ? children : getChildren(descendents)}
        </div>
      )
    )],
    [isNull, () => <Fragment>{children ? children : getChildren(descendents)}</Fragment>]
  ])(Element)
}

function DynamicBuilderRender(props){
  const { valueKey } = props
  return(
      <GetNode valueKey={valueKey} />
    )
}

export default memo(DynamicBuilderRender)
