import React, {useReducer, useEffect} from 'react';
import renderReducer from './reducers/render'
import landingPage from './templates/Landpage'
import {ACTIONS} from './constants/constants'
import { getHoverKeys, getLastLevel } from './utils/utils'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/fp/isEmpty'
import debounce from 'lodash/fp/debounce'
import DynamicContextProvider from './components/dynamic/DynamicContextProvider'
import MainLayout from './components/MainLayout'

function init() {
  const valueMap = {}
  const hoverKeys = []
  return {valueMap, startingPoint: {}, hoverKeys};
}

function App() {
  const [state, dispatch] = useReducer(renderReducer, init());

  const onMouseMove = debounce(80)(() => {
    const hoverKeys = getHoverKeys()
    if(hoverKeys) {
      dispatch({type: ACTIONS.ON_HOVER_ELEMENTS, payload: {hoverKeys: getLastLevel(hoverKeys)}})
    }
  })

  const onClick = e => {
    dispatch({type: ACTIONS.ON_SELECT_ELEMENT})
  }

  const onChange = (key,value) => dispatch({type: ACTIONS.ON_CHANGE_VALUE, payload: {key: key, value: value}})
  const onSelectFromLeftPanel = key =>  dispatch({type: ACTIONS.ON_SELECT_FROM_LEFT_PANEL, payload: {key: key}})

  useEffect(()=>{
    console.log(landingPage.content)
    dispatch({type: ACTIONS.ON_LOAD_RENDER, payload: { content: cloneDeep(landingPage.content) }})
  }, [])

  return(<div>
    {(state && !isEmpty(state.valueMap)) ? (
      <DynamicContextProvider content={state.valueMap} valueKey={state.startingPoint} hoverKeys={state.hoverKeys}
                              selectElement={state.selectElement}>
        <MainLayout onMouseMove={onMouseMove} onClick={onClick} valueKey={state.startingPoint} onSelectFromLeftPanel={onSelectFromLeftPanel} onChange={onChange} />
      </DynamicContextProvider>
    ) : null}
   </div>)
}

export default App;
