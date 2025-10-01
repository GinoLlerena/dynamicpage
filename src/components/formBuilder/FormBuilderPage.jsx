import React from 'react'
import LeftNav from '../layout/LeftNav.jsx'
import FormBuilder from './FormBuilder.jsx'

function FormBuilderPage() {
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-12 lg:col-span-2">
        <LeftNav />
      </div>
      <div className="col-span-12 lg:col-span-10 p-4 lg:p-8 bg-gray-50 min-h-screen">
        <FormBuilder />
      </div>
    </div>
  )
}

export default FormBuilderPage

