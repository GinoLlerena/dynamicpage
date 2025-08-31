import React, { useMemo } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import landingPage from '../templates/Landpage'
import keyBy from 'lodash/fp/keyBy'
import cloneDeep from 'lodash/cloneDeep'
import { assignKeyToContent, getPlainState } from '../utils/utils'
import DynamicRender from '../components/dynamic/DynamicRender'
import LeftNav from '../components/layout/LeftNav'

function prepareContent(template) {
  const content = cloneDeep(template.content)
  const list = []
  assignKeyToContent(content, 0)
  getPlainState(list, content)
  const valueMap = keyBy('key')(list)
  return { valueMap, startingPoint: content.key }
}

function RenderRouteComponent() {
  const { valueMap, startingPoint } = useMemo(() => prepareContent(landingPage), [])
  return (
    <div className='grid grid-cols-12 gap-0'>
      <div className='col-span-12 lg:col-span-2'>
        <LeftNav />
      </div>
      <div className='col-span-12 lg:col-span-10'>
        <DynamicRender valueKey={startingPoint} content={valueMap} />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/render')({
  component: RenderRouteComponent,
})

