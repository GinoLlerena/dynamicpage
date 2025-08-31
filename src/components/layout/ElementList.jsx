import React, {useContext, useMemo} from 'react'
import {ContentContext, UIContext} from '../dynamic/DynamicContextProvider'
import map from 'lodash/fp/map'
import isEmpty from 'lodash/fp/isEmpty'
import values from 'lodash/fp/values'
import flow from 'lodash/fp/flow'
import first from 'lodash/fp/first'
import {getParentElement} from '../../utils/selectectors'

function ElementChild(props) {
  const { value, onClick } = props
  return(
    <li>
      <a className="cursor-pointer link" onClick={onClick}>{`${value.element || 'Fragment'}`}</a>
    </li>
  )
}

function ElementList(props) {
  const content = useContext(ContentContext)
  const { selectElement } = useContext(UIContext)
  const { onSelectFromLeftPanel, onChange } = props

  if(!selectElement || isEmpty(selectElement)){
    return null
  }

  const onClick = key => _ => onSelectFromLeftPanel(key)
  const onClickParent = (parentKey, parentLevel) => _ => parentLevel >= 0 ? onSelectFromLeftPanel(parentKey) : null
  const onChangeValue = e => onChange(key, e.target.value)
  const currentValue = flow(values, first)(selectElement)
  const { key } = currentValue
  const parenElement = getParentElement(key, content)
  const { key: parentKey, element: parentElement, level: parentLevel } = parenElement ?? {}
  const element = content[key]
  const { element: Element, descendents, children } = element

  // Build breadcrumb path to root
  const breadcrumb = useMemo(() => {
    const chain = []
    let curKey = key
    while (curKey) {
      const node = content[curKey]
      if (!node) break
      chain.unshift({ key: curKey, label: node.element || 'Fragment' })
      const parent = getParentElement(curKey, content)
      curKey = parent?.key
    }
    return chain
  }, [key, content])

  return(
      <div className="bg-white rounded shadow">
        <div className="border-b p-3" id="headingOne">
          <h5 className="m-0">
            <a className="cursor-pointer link" onClick={onClickParent(parentKey, parentLevel)}>
              {`Parent Tag: ${parentElement || 'Fragment'}`}
            </a>
          </h5>
        </div>
        <div className="p-4">
          {breadcrumb.length > 0 && (
            <nav className="mb-3 text-sm text-gray-600">
              {breadcrumb.map((b, idx) => (
                <span key={b.key}>
                  <a className="link cursor-pointer" onClick={onClick(b.key)}>{b.label}</a>
                  {idx < breadcrumb.length - 1 ? <span className="px-1 text-gray-400">/</span> : null}
                </span>
              ))}
            </nav>
          )}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Tag</label>
              <div className="mt-1 w-full rounded border border-gray-300 px-3 py-2">{Element ?? 'Fragment'}</div>
            </div>
            {typeof children === 'string' ?
              <div>
                <label className="block text-sm font-medium text-gray-700">Value</label>
                <textarea className="mt-1 w-full rounded border border-gray-300 px-3 py-2" rows={10} value={children} onChange={onChangeValue}/>
              </div>
              :
              <div>
                <label className="block text-sm font-medium text-gray-700">Elements</label>
                <ul className="mt-1 flex flex-col gap-1">
                  {map(item => (<ElementChild key={item} value={content[item]} onClick={onClick(item)}/>))(descendents)}
                </ul>
              </div>
            }
          </form>
        </div>
      </div>
  )
}

export default ElementList
