import React from 'react';
import DynamicBuilderRender from './dynamic/DynamicBuilderRender'
import ElementList from './layout/ElementList'

function MainLayout(props) {
  const { valueKey, onMouseMove, onClick, onSelectFromLeftPanel, onChange } = props

  return(
    <div className='row no-gutters'>
      <div className={'col col-lg-2'}>
        <ElementList onSelectFromLeftPanel={onSelectFromLeftPanel} onChange={onChange} />
      </div>
      <div className={'col col-lg-10'} onMouseMove={onMouseMove} onClick={onClick}>
        <DynamicBuilderRender valueKey={valueKey}  />
      </div>
    </div>
  )
}

export default MainLayout;
