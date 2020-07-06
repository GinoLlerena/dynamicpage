import {ACTIONS} from "../constants/constants";
import keyBy from 'lodash/fp/keyBy'
import {assignKeyToContent, getPlainState} from '../utils/utils'

function renderReducer(state, action) {
  switch(action.type){
    case ACTIONS.ON_LOAD_RENDER:
      if(action.payload){
        const { content } = action.payload
        let valState = []
        assignKeyToContent(content, 0)
        console.log('content with keys', content)
        const startingPoint = content.key
        getPlainState(valState, content)
        console.log('pre newState', valState)
        const valueMap = keyBy('key')(valState)
        console.log('state', valueMap)
        return { ...state, valueMap, startingPoint }
      }
      return state
    case ACTIONS.ON_HOVER_ELEMENTS:
      if(action.payload){
        const { hoverKeys } = action.payload
        return { ...state, hoverKeys}
      }
      return state
    case ACTIONS.ON_SELECT_ELEMENT:
      return { ...state, selectElement: state.hoverKeys }
    case ACTIONS.ON_SELECT_FROM_LEFT_PANEL:
      if(action.payload) {
        const { key } = action.payload
        const selectElement = { [key]: state.valueMap[key] }
        return {...state, selectElement}
      }
      return state
    case ACTIONS.ON_CHANGE_VALUE:
      if(action.payload) {
        const { key, value } = action.payload
        const { valueMap } = state
        const currentValue = valueMap[key]
        return {...state, valueMap: { ...valueMap, [key]: { ...currentValue, children: value } }}
      }
      return state
    default:
      throw new Error();
  }
}

export default renderReducer
