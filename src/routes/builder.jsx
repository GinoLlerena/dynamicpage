import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import App from '../App.jsx'

function BuilderPage() {
  return <App />
}

export const Route = createFileRoute('/builder')({
  component: BuilderPage,
})

