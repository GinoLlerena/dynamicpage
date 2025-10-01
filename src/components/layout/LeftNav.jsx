import React from 'react'
import { Link } from '@tanstack/react-router'

function LeftNav() {
  return (
    <div className="bg-white rounded shadow mb-4 p-3">
      <div className="flex flex-col gap-2">
        <Link to="/form-builder" className="btn btn-ghost w-full">Form Builder</Link>
        <Link to="/builder" className="btn btn-ghost w-full">Page Builder</Link>
        <Link to="/render" className="btn btn-ghost w-full">Page Render</Link>
      </div>
    </div>
  )
}

export default LeftNav
