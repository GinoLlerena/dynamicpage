import React, {Fragment, useContext} from 'react'
import cond from 'lodash/fp/cond'
import map from 'lodash/fp/map'
import DynamicContextProvider, {DynamicContext} from './DynamicContextProvider'
import ContactForm from '../ContactForm'

const isFinalNode = Element => (['img','input'].includes(Element))
const isNull = Element => (Element === null)
const isNotFinalNode = Element => Element && !isFinalNode(Element)
const isContactForm = Element => Element === 'ContactForm'

function getChildren(descendents) {
  return (map(item => (<GetNode key={item} valueKey={item}/>))(descendents))
}

function GetNode(props) {
  const { valueKey } = props;
  const [content] = useContext(DynamicContext)
  const element = content[valueKey]
  const { element: Element, children, descendents, props: myProps } = element
  return cond([
    [isContactForm, ()=> <ContactForm {...myProps} />],
    [isFinalNode, () => (<Element key={valueKey} {...myProps}>{null}</Element>)],
    [isNotFinalNode, () => (<Element key={valueKey} {...myProps}>{children ? children : getChildren(descendents)}</Element>)],
    [isNull, () => <Fragment>{children ? children : getChildren(descendents)}</Fragment>]
  ])(Element)
}

function DynamicRender(props){
  const { valueKey, content } = props

  return(<DynamicContextProvider content={content}  >
      <GetNode valueKey={valueKey} />
    </DynamicContextProvider>)
}

export default DynamicRender
