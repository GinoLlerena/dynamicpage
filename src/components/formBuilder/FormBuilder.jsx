import React, { useCallback, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { validateFormSchema } from '../../forms/formSchemaValidator.js'

const TOOLBAR_ITEMS = [
  { key: 'heading', label: 'Heading' },
  { key: 'textInput', label: 'Text Input' },
  { key: 'emailInput', label: 'Email Input' },
  { key: 'textarea', label: 'Textarea' },
  { key: 'button', label: 'Button' },
]

const DEFAULT_FORM_META = {
  id: 'dynamicForm',
  title: 'Dynamic Form',
  description: '',
  layout: {
    containerClassName: 'contact-form py-12',
    innerClassName: 'mx-auto max-w-7xl px-4',
    formClassName: '',
    gridClassName: 'grid grid-cols-12 gap-6',
  },
}

function uniqueId(prefix) {
  return `${prefix}-${uuidv4().slice(0, 8)}`
}

function createFieldTemplate(templateKey) {
  switch (templateKey) {
    case 'heading': {
      const id = uniqueId('heading')
      return {
        id,
        component: 'heading',
        fieldLabel: 'Heading',
        text: 'Section Title',
        tag: 'h2',
        className: 'text-2xl font-semibold',
        wrapperClassName: 'col-span-12',
      }
    }
    case 'textInput': {
      const id = uniqueId('text')
      return {
        id,
        component: 'input',
        fieldLabel: 'Text Input',
        name: id,
        label: 'Text Field',
        type: 'text',
        placeholder: 'Enter text',
        wrapperClassName: 'col-span-12 md:col-span-6',
        spacingClassName: 'mb-4',
        inputClassName: 'w-full rounded border border-gray-300 px-3 py-2 text-base',
        defaultValue: '',
        required: false,
        requiredMessage: '',
        pattern: '',
        patternMessage: '',
      }
    }
    case 'emailInput': {
      const id = uniqueId('email')
      return {
        id,
        component: 'input',
        fieldLabel: 'Email Input',
        name: id,
        label: 'Email',
        type: 'email',
        placeholder: 'name@example.com',
        wrapperClassName: 'col-span-12 md:col-span-6',
        spacingClassName: 'mb-4',
        inputClassName: 'w-full rounded border border-gray-300 px-3 py-2 text-base',
        defaultValue: '',
        required: true,
        requiredMessage: 'Email is required.',
        pattern: '',
        patternMessage: '',
      }
    }
    case 'textarea': {
      const id = uniqueId('textarea')
      return {
        id,
        component: 'textarea',
        fieldLabel: 'Textarea',
        name: id,
        label: 'Message',
        placeholder: 'Write your message here...',
        wrapperClassName: 'col-span-12',
        spacingClassName: 'mb-4',
        inputClassName: 'w-full rounded border border-gray-300 px-3 py-2 text-base min-h-[120px]',
        defaultValue: '',
        required: false,
        requiredMessage: '',
      }
    }
    case 'button': {
      const id = uniqueId('button')
      return {
        id,
        component: 'button',
        fieldLabel: 'Button',
        text: 'Submit',
        type: 'submit',
        wrapperClassName: 'col-span-12',
        className: 'btn btn-primary',
      }
    }
    default:
      return null
  }
}

function pruneUndefined(record) {
  return Object.fromEntries(Object.entries(record).filter(([, value]) => value !== undefined))
}

function mapFieldToSchema(field) {
  const base = pruneUndefined({
    id: field.id?.trim(),
    component: field.component,
    wrapperClassName: field.wrapperClassName,
    spacingClassName: field.spacingClassName,
  })

  switch (field.component) {
    case 'heading': {
      return pruneUndefined({
        ...base,
        text: field.text,
        props: pruneUndefined({
          as: field.tag,
          className: field.className,
        }),
      })
    }
    case 'input': {
      const validation = {}
      if (field.required) {
        validation.required = {
          message: field.requiredMessage?.trim() || 'This field is required.',
        }
      }
      if (field.pattern) {
        validation.pattern = pruneUndefined({
          value: field.pattern,
          message: field.patternMessage?.trim() || 'Value format is invalid.',
        })
      }

      const schemaField = pruneUndefined({
        ...base,
        label: field.label,
        name: field.name,
        type: field.type,
        placeholder: field.placeholder,
        inputClassName: field.inputClassName,
        defaultValue: field.defaultValue ?? '',
        validation: Object.keys(validation).length > 0 ? validation : undefined,
      })

      return schemaField
    }
    case 'textarea': {
      const validation = {}
      if (field.required) {
        validation.required = {
          message: field.requiredMessage?.trim() || 'This field is required.',
        }
      }

      return pruneUndefined({
        ...base,
        label: field.label,
        name: field.name,
        placeholder: field.placeholder,
        inputClassName: field.inputClassName,
        defaultValue: field.defaultValue ?? '',
        validation: Object.keys(validation).length > 0 ? validation : undefined,
      })
    }
    case 'button': {
      return pruneUndefined({
        ...base,
        text: field.text,
        type: field.type,
        className: field.className,
      })
    }
    default:
      return base
  }
}

function FieldListItem(props) {
  const { field, index, isSelected, validationErrors, onClick, onRemove, onDragStart, onDragOver, onDrop } = props
  const hasErrors = validationErrors && validationErrors.length > 0

  return (
    <div
      className={`border rounded-md bg-white shadow-sm p-3 mb-3 cursor-move ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}
      draggable
      onClick={() => onClick(field.id)}
      onDragStart={event => onDragStart(event, index)}
      onDragOver={event => onDragOver(event, index)}
      onDrop={event => onDrop(event, index)}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-800">{field.fieldLabel}</p>
          <p className="text-xs text-gray-500">{field.id}</p>
        </div>
        <button
          type="button"
          className="text-xs text-red-500 hover:text-red-600"
          onClick={event => {
            event.stopPropagation()
            onRemove(field.id)
          }}
        >
          Remove
        </button>
      </div>
      {hasErrors ? (
        <ul className="mt-2 text-xs text-red-600 list-disc list-inside">
          {validationErrors.map((error, errorIndex) => (
            <li key={errorIndex}>{error}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function FieldInspector(props) {
  const { field, onFieldChange, onFieldIdChange } = props

  if (!field) {
    return (
      <div className="rounded-md border border-dashed border-gray-300 p-4 text-sm text-gray-500">
        Select a field to edit its properties.
      </div>
    )
  }

  const isFormControl = field.component === 'input' || field.component === 'textarea'

  const handleInputChange = (key, value) => {
    onFieldChange(field.id, { [key]: value })
  }

  const handleCheckboxChange = (key, checked) => {
    onFieldChange(field.id, { [key]: checked })
  }

  return (
    <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Field Settings</h3>
      <div className="space-y-3">
        <label className="block text-xs font-medium text-gray-600">Field ID</label>
        <input
          className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
          value={field.id}
          onChange={event => onFieldIdChange(field.id, event.target.value)}
        />

        {isFormControl ? (
          <>
            <label className="block text-xs font-medium text-gray-600">Field Name</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.name ?? ''}
              onChange={event => handleInputChange('name', event.target.value)}
            />
          </>
        ) : null}

        {isFormControl ? (
          <>
            <label className="block text-xs font-medium text-gray-600">Label</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.label ?? ''}
              onChange={event => handleInputChange('label', event.target.value)}
            />
          </>
        ) : null}

        {field.component === 'heading' ? (
          <>
            <label className="block text-xs font-medium text-gray-600">Heading Text</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.text}
              onChange={event => handleInputChange('text', event.target.value)}
            />
            <label className="block text-xs font-medium text-gray-600">HTML Tag</label>
            <select
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.tag}
              onChange={event => handleInputChange('tag', event.target.value)}
            >
              {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(option => (
                <option key={option} value={option}>{option.toUpperCase()}</option>
              ))}
            </select>
            <label className="block text-xs font-medium text-gray-600">Class Name</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.className ?? ''}
              onChange={event => handleInputChange('className', event.target.value)}
            />
          </>
        ) : null}

        {field.component === 'input' ? (
          <>
            <label className="block text-xs font-medium text-gray-600">Input Type</label>
            <select
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.type}
              onChange={event => handleInputChange('type', event.target.value)}
            >
              {['text', 'email', 'number', 'password', 'tel', 'url'].map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <label className="block text-xs font-medium text-gray-600">Placeholder</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.placeholder ?? ''}
              onChange={event => handleInputChange('placeholder', event.target.value)}
            />
            <label className="block text-xs font-medium text-gray-600">Default Value</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.defaultValue ?? ''}
              onChange={event => handleInputChange('defaultValue', event.target.value)}
            />
            <label className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <input
                type="checkbox"
                checked={field.required ?? false}
                onChange={event => handleCheckboxChange('required', event.target.checked)}
              />
              Required
            </label>
            {field.required ? (
              <>
                <label className="block text-xs font-medium text-gray-600">Required Message</label>
                <input
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
                  value={field.requiredMessage ?? ''}
                  onChange={event => handleInputChange('requiredMessage', event.target.value)}
                />
              </>
            ) : null}
            <label className="block text-xs font-medium text-gray-600">Pattern</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.pattern ?? ''}
              onChange={event => handleInputChange('pattern', event.target.value)}
              placeholder="Regular expression"
            />
            {field.pattern ? (
              <>
                <label className="block text-xs font-medium text-gray-600">Pattern Message</label>
                <input
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
                  value={field.patternMessage ?? ''}
                  onChange={event => handleInputChange('patternMessage', event.target.value)}
                />
              </>
            ) : null}
            <label className="block text-xs font-medium text-gray-600">Input Class Name</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.inputClassName ?? ''}
              onChange={event => handleInputChange('inputClassName', event.target.value)}
            />
          </>
        ) : null}

        {field.component === 'textarea' ? (
          <>
            <label className="block text-xs font-medium text-gray-600">Placeholder</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.placeholder ?? ''}
              onChange={event => handleInputChange('placeholder', event.target.value)}
            />
            <label className="block text-xs font-medium text-gray-600">Default Value</label>
            <textarea
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.defaultValue ?? ''}
              rows={3}
              onChange={event => handleInputChange('defaultValue', event.target.value)}
            />
            <label className="flex items-center gap-2 text-xs font-medium text-gray-600">
              <input
                type="checkbox"
                checked={field.required ?? false}
                onChange={event => handleCheckboxChange('required', event.target.checked)}
              />
              Required
            </label>
            {field.required ? (
              <>
                <label className="block text-xs font-medium text-gray-600">Required Message</label>
                <input
                  className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
                  value={field.requiredMessage ?? ''}
                  onChange={event => handleInputChange('requiredMessage', event.target.value)}
                />
              </>
            ) : null}
            <label className="block text-xs font-medium text-gray-600">Class Name</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.inputClassName ?? ''}
              onChange={event => handleInputChange('inputClassName', event.target.value)}
            />
          </>
        ) : null}

        {field.component === 'button' ? (
          <>
            <label className="block text-xs font-medium text-gray-600">Button Text</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.text ?? ''}
              onChange={event => handleInputChange('text', event.target.value)}
            />
            <label className="block text-xs font-medium text-gray-600">Button Type</label>
            <select
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.type ?? 'button'}
              onChange={event => handleInputChange('type', event.target.value)}
            >
              {['button', 'submit', 'reset'].map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <label className="block text-xs font-medium text-gray-600">Class Name</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.className ?? ''}
              onChange={event => handleInputChange('className', event.target.value)}
            />
          </>
        ) : null}

        <label className="block text-xs font-medium text-gray-600">Wrapper Class Name</label>
        <input
          className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
          value={field.wrapperClassName ?? ''}
          onChange={event => handleInputChange('wrapperClassName', event.target.value)}
        />
        {field.component !== 'button' && field.component !== 'heading' ? (
          <>
            <label className="block text-xs font-medium text-gray-600">Spacing Class Name</label>
            <input
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm"
              value={field.spacingClassName ?? ''}
              onChange={event => handleInputChange('spacingClassName', event.target.value)}
            />
          </>
        ) : null}
      </div>
    </div>
  )
}

function FormBuilder() {
  const [formMeta, setFormMeta] = useState(DEFAULT_FORM_META)
  const [fields, setFields] = useState([])
  const [selectedFieldId, setSelectedFieldId] = useState(null)
  const [draggedIndex, setDraggedIndex] = useState(null)
  const [schemaEditorValue, setSchemaEditorValue] = useState('')
  const [schemaEditorResult, setSchemaEditorResult] = useState(null)
  const [copyStatus, setCopyStatus] = useState(null)

  const selectedField = fields.find(field => field.id === selectedFieldId) ?? null

  const schema = useMemo(() => {
    return {
      id: formMeta.id.trim() || 'dynamicForm',
      title: formMeta.title.trim() || 'Dynamic Form',
      description: formMeta.description ?? '',
      layout: { ...formMeta.layout },
      fields: fields.map(mapFieldToSchema),
    }
  }, [fields, formMeta])

  const validationResult = useMemo(() => validateFormSchema(schema), [schema])
  const fieldValidationMap = useMemo(() => {
    const map = new Map()
    validationResult.fieldErrors.forEach(item => {
      map.set(item.fieldId, item.errors)
    })
    return map
  }, [validationResult.fieldErrors])

  const handleMetaChange = useCallback((key, value) => {
    setFormMeta(prev => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  const handleLayoutChange = useCallback((key, value) => {
    setFormMeta(prev => ({
      ...prev,
      layout: {
        ...prev.layout,
        [key]: value,
      },
    }))
  }, [])

  const handleAddField = useCallback(templateKey => {
    const newField = createFieldTemplate(templateKey)
    if (!newField) {
      return
    }
    setFields(prev => [...prev, newField])
    setSelectedFieldId(newField.id)
  }, [])

  const handleFieldChange = useCallback((fieldId, updates) => {
    setFields(prev => prev.map(field => {
      if (field.id !== fieldId) {
        return field
      }
      return {
        ...field,
        ...updates,
      }
    }))
  }, [])

  const handleFieldIdChange = useCallback((fieldId, nextId) => {
    const trimmed = nextId.trim()
    if (!trimmed) {
      handleFieldChange(fieldId, { id: trimmed })
      setSelectedFieldId(trimmed)
      return
    }

    setFields(prev => prev.map(field => {
      if (field.id !== fieldId) {
        return field
      }
      const nextField = {
        ...field,
        id: trimmed,
      }
      if (field.name === fieldId) {
        nextField.name = trimmed
      }
      return nextField
    }))
    setSelectedFieldId(trimmed)
  }, [handleFieldChange])

  const handleRemoveField = useCallback(fieldId => {
    setFields(prev => prev.filter(field => field.id !== fieldId))
    setSelectedFieldId(prev => (prev === fieldId ? null : prev))
  }, [])

  const moveField = useCallback((fromIndex, toIndex) => {
    setFields(prev => {
      const next = [...prev]
      const [removed] = next.splice(fromIndex, 1)
      next.splice(toIndex, 0, removed)
      return next
    })
  }, [])

  const handleDragStart = useCallback((event, index) => {
    setDraggedIndex(index)
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', String(index))
  }, [])

  const handleDragOver = useCallback((event, index) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const handleDrop = useCallback((event, index) => {
    event.preventDefault()
    const sourceIndex = draggedIndex ?? Number(event.dataTransfer.getData('text/plain'))
    if (Number.isInteger(sourceIndex) && sourceIndex !== index) {
      moveField(sourceIndex, index)
    }
    setDraggedIndex(null)
  }, [draggedIndex, moveField])

  const handleCopySchema = useCallback(async () => {
    const json = JSON.stringify(schema, null, 2)
    try {
      await navigator.clipboard.writeText(json)
      setCopyStatus({ type: 'success', message: 'Schema copied to clipboard.' })
    } catch (error) {
      setCopyStatus({ type: 'error', message: 'Unable to copy schema. Try manually copying from the preview.' })
    }
  }, [schema])

  const handleSchemaValidation = useCallback(() => {
    try {
      const parsed = JSON.parse(schemaEditorValue)
      const result = validateFormSchema(parsed)
      setSchemaEditorResult({ success: true, result })
    } catch (error) {
      setSchemaEditorResult({ success: false, error: error.message })
    }
  }, [schemaEditorValue])

  const schemaText = useMemo(() => JSON.stringify(schema, null, 2), [schema])
  const isSchemaValid = validationResult.valid

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Form Builder</h1>
        <p className="text-sm text-gray-600">Add fields, reorder them, and export a TanStack Form configuration schema.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-800 mb-4">Form Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600">Form ID</label>
                <input
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                  value={formMeta.id}
                  onChange={event => handleMetaChange('id', event.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600">Title</label>
                <input
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                  value={formMeta.title}
                  onChange={event => handleMetaChange('title', event.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-600">Description</label>
                <textarea
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                  rows={2}
                  value={formMeta.description}
                  onChange={event => handleMetaChange('description', event.target.value)}
                />
              </div>
            </div>
            <div className="mt-4 border-t border-gray-100 pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Layout Classes</h3>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600">Container Class</label>
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                    value={formMeta.layout.containerClassName}
                    onChange={event => handleLayoutChange('containerClassName', event.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600">Inner Container Class</label>
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                    value={formMeta.layout.innerClassName}
                    onChange={event => handleLayoutChange('innerClassName', event.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600">Form Class</label>
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                    value={formMeta.layout.formClassName}
                    onChange={event => handleLayoutChange('formClassName', event.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600">Grid Class</label>
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
                    value={formMeta.layout.gridClassName}
                    onChange={event => handleLayoutChange('gridClassName', event.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-800 mb-4">Toolbar</h2>
            <div className="flex flex-wrap gap-2">
              {TOOLBAR_ITEMS.map(item => (
                <button
                  key={item.key}
                  type="button"
                  className="rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => handleAddField(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-800">Fields</h2>
              <span className={`text-xs font-medium ${isSchemaValid ? 'text-green-600' : 'text-red-600'}`}>
                {isSchemaValid ? 'Schema is valid' : 'Schema has issues'}
              </span>
            </div>
            <div className="mt-4">
              {fields.length === 0 ? (
                <div className="rounded-md border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
                  Add fields from the toolbar to start building your form.
                </div>
              ) : (
                fields.map((field, index) => (
                  <FieldListItem
                    key={field.id}
                    field={field}
                    index={index}
                    isSelected={field.id === selectedFieldId}
                    validationErrors={fieldValidationMap.get(field.id)}
                    onClick={setSelectedFieldId}
                    onRemove={handleRemoveField}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  />
                ))
              )}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <FieldInspector
            field={selectedField}
            onFieldChange={handleFieldChange}
            onFieldIdChange={handleFieldIdChange}
          />

          <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-800">Schema Preview</h2>
              <button
                type="button"
                className="rounded border border-blue-500 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100"
                onClick={handleCopySchema}
              >
                Copy Schema
              </button>
            </div>
            {copyStatus ? (
              <p
                className={`mb-2 text-xs ${copyStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
              >
                {copyStatus.message}
              </p>
            ) : null}
            <textarea
              className="h-64 w-full rounded border border-gray-300 bg-gray-900 text-gray-100 px-3 py-2 text-xs font-mono"
              value={schemaText}
              readOnly
            />
            {!isSchemaValid || validationResult.errors.length > 0 ? (
              <div className="mt-3 rounded border border-red-200 bg-red-50 p-2 text-xs text-red-600">
                <p className="font-semibold">Schema Issues</p>
                <ul className="list-disc list-inside">
                  {validationResult.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-800 mb-3">Schema Validator Playground</h2>
            <p className="text-xs text-gray-500 mb-2">
              Paste a JSON schema to validate it with the same rules used by the builder.
            </p>
            <textarea
              className="h-48 w-full rounded border border-gray-300 px-3 py-2 text-xs font-mono"
              placeholder="Paste schema JSON here..."
              value={schemaEditorValue}
              onChange={event => setSchemaEditorValue(event.target.value)}
            />
            <button
              type="button"
              className="mt-2 w-full rounded bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
              onClick={handleSchemaValidation}
            >
              Validate JSON
            </button>
            {schemaEditorResult ? (
              schemaEditorResult.success ? (
                <div className="mt-3 rounded border border-green-200 bg-green-50 p-2 text-xs text-green-700">
                  {schemaEditorResult.result.valid ? 'Schema is valid.' : 'Schema has issues.'}
                  {schemaEditorResult.result.errors.length > 0 ? (
                    <ul className="mt-2 list-disc list-inside">
                      {schemaEditorResult.result.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  ) : null}
                  {schemaEditorResult.result.fieldErrors.length > 0 ? (
                    <ul className="mt-2 list-disc list-inside">
                      {schemaEditorResult.result.fieldErrors.flatMap((item, index) => (
                        item.errors.map((error, errorIndex) => (
                          <li key={`${index}-${errorIndex}`}>{`${item.fieldId}: ${error}`}</li>
                        ))
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <div className="mt-3 rounded border border-red-200 bg-red-50 p-2 text-xs text-red-600">
                  <p className="font-semibold">Invalid JSON</p>
                  <p>{schemaEditorResult.error}</p>
                </div>
              )
            ) : null}
          </section>
        </div>
      </div>
    </div>
  )
}

export default FormBuilder
