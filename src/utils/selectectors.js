import flow from 'lodash/fp/flow'
import values from 'lodash/fp/values'
import some from 'lodash/fp/some'
import filter from 'lodash/fp/filter'
import first from 'lodash/fp/first'

export function getParentElement(key, content){
  const compareDescendant = keyValue => keyValue === key
  const compare = item => some(compareDescendant)(item.descendents)
  const element = flow(values, filter(compare), first)(content)
  return element;
}
