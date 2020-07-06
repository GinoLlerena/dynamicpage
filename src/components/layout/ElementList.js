import React, {useContext} from 'react'
import {DynamicContext} from '../dynamic/DynamicContextProvider'
import map from 'lodash/fp/map'
import isEmpty from 'lodash/fp/isEmpty'
import values from 'lodash/fp/values'
import flow from 'lodash/fp/flow'
import first from 'lodash/fp/first'
import {getParentElement} from '../../utils/selectectors'

function ElementChild(props) {
  const { value, onClick } = props
  return(
    <li className="nav-item">
      <a className="nav-link" onClick={onClick}>{`${value.element || 'Fragment'}`}</a>
    </li>
  )
}

function ElementList(props) {
  const [content, _, selectElement] = useContext(DynamicContext)
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

  return(
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <a className="nav-link" onClick={onClickParent(parentKey, parentLevel)}>
              {`Parent Tag: ${parentElement || 'Fragment'}`}
            </a>
          </h5>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Current Tag</label>
              <label className="form-control form-control-lg">{Element ?? 'Fragment'}</label>
            </div>
            {typeof children === 'string' ?
              <div className="form-group">
                <label>Value</label>
                <textarea className="form-control form-control-lg" rows={10} value={children} onChange={onChangeValue}/>
              </div>
              :
              <div className="form-group">
                <label>Elements</label>
                <ul className="nav flex-column">
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
