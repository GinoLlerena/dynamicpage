import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import FormBuilderPage from '../components/formBuilder/FormBuilderPage.jsx'

export const Route = createFileRoute('/form-builder')({
  component: FormBuilderPage,
})

