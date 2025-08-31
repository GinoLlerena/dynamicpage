import React from 'react';
import DynamicBuilderRender from './dynamic/DynamicBuilderRender'
import ElementList from './layout/ElementList'
import LeftNav from './layout/LeftNav'

function MainLayout(props) {
  const { valueKey, onMouseMove, onClick, onSelectFromLeftPanel, onChange } = props

  return(
    <div className='grid grid-cols-12 gap-0'>
      <div className={'col-span-12 lg:col-span-2'}>
        <LeftNav />
        <ElementList onSelectFromLeftPanel={onSelectFromLeftPanel} onChange={onChange} />
      </div>
      <div className={'col-span-12 lg:col-span-10'} onMouseMove={onMouseMove} onClick={onClick}>
        <DynamicBuilderRender valueKey={valueKey}  />
      </div>
    </div>
  )
}

export default MainLayout;
