import React, { useEffect, useMemo, useRef } from 'react'
import { useForm, useStore } from '@tanstack/react-form'
import schema from '../../forms/contactForm.schema.json'

const CONTROL_COMPONENTS = new Set(['input', 'textarea', 'select', 'checkbox', 'radio', 'switch'])

const defaultLayout = {
  containerClassName: '',
  innerClassName: '',
  formClassName: '',
  gridClassName: 'grid gap-4',
}

function combineClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function buildDefaultValues(fields) {
  return fields.reduce((accumulator, field) => {
    accumulator[field.id] = field.defaultValue ?? ''
    return accumulator
  }, {})
}

function getFieldError(fieldApi) {
  const meta = fieldApi.state?.meta ?? {}
  const errors = meta.errors ?? []
  if (errors.length > 0) {
    return errors[0]
  }
  return ''
}

function normalizeValue(value) {
  if (typeof value === 'string') {
    return value.trim()
  }
  return value
}

function runFieldValidation(field, value) {
  const config = field?.validation
  if (!config) {
    return undefined
  }

  const normalizedValue = normalizeValue(value)

  if (config.required) {
    const isEmpty = normalizedValue === undefined || normalizedValue === null || normalizedValue === ''
    if (isEmpty) {
      return config.required.message ?? 'This field is required.'
    }
  }

  if (config.pattern?.value) {
    if (normalizedValue === undefined || normalizedValue === null || normalizedValue === '') {
      return undefined
    }
    try {
      const regex = new RegExp(config.pattern.value)
      if (!regex.test(String(normalizedValue ?? ''))) {
        return config.pattern.message ?? 'Value format is invalid.'
      }
    } catch (error) {
      console.warn(`Invalid validation pattern for field "${field.id}":`, error)
    }
  }

  return undefined
}

function buildFieldValidators(field) {
  if (!field?.validation) {
    return undefined
  }

  const validator = ({ value }) => runFieldValidation(field, value)

  return {
    onChange: validator,
    onBlur: validator,
    onSubmit: validator,
  }
}

function renderInputControl(kind, field, fieldApi) {
  const ControlTag = kind === 'textarea' ? 'textarea' : 'input'
  const inputProps = {
    id: field.id,
    name: fieldApi.name,
    value: fieldApi.state.value ?? '',
    onChange: event => fieldApi.handleChange(event.target.value),
    onBlur: fieldApi.handleBlur,
    placeholder: field.placeholder ?? '',
    className: combineClassNames(field.inputClassName),
    ...field.props,
  }

  if (kind === 'input') {
    inputProps.type = field.type ?? 'text'
  }

  const errorMessage = getFieldError(fieldApi)

  return (
    <div className={combineClassNames(field.wrapperClassName)}>
      <div className={combineClassNames(field.spacingClassName)}>
        {field.label ? (
          <label htmlFor={field.id} className={combineClassNames(field.labelClassName)}>
            {field.label}
          </label>
        ) : null}
        <ControlTag {...inputProps} />
        {errorMessage ? <p className="mt-1 text-sm text-red-600">{errorMessage}</p> : null}
      </div>
    </div>
  )
}

const defaultRenderers = {
  heading: field => {
    const HeadingTag = field?.props?.as ?? 'h2'
    return (
      <div className={combineClassNames(field.wrapperClassName)}>
        <HeadingTag className={combineClassNames(field?.props?.className)}>{field.text}</HeadingTag>
      </div>
    )
  },
  input: (field, { fieldApi }) => renderInputControl('input', field, fieldApi),
  textarea: (field, { fieldApi }) => renderInputControl('textarea', field, fieldApi),
  button: field => (
    <div className={combineClassNames(field.wrapperClassName)}>
      <button type={field.type ?? 'button'} className={combineClassNames(field.className)} {...field.props}>
        {field.text}
      </button>
    </div>
  ),
}

function FormRender(props) {
  const {
    config = schema,
    onSubmit,
    onValuesChange,
    className,
    valueMapRef,
    renderers = {},
    containerProps = {},
    formProps = {},
  } = props

  const fields = config?.fields ?? []
  const layout = { ...defaultLayout, ...config?.layout }
  const interactiveFields = useMemo(
    () => fields.filter(field => CONTROL_COMPONENTS.has(field.component)),
    [fields],
  )

  const defaultValues = useMemo(() => buildDefaultValues(interactiveFields), [interactiveFields])
  const latestAnswersRef = useRef(new Map(Object.entries(defaultValues)))

  const form = useForm({
    defaultValues,
    onSubmit: async ({ value, formApi }) => {
      const answers = new Map(Object.entries(value ?? {}))
      latestAnswersRef.current = answers
      if (valueMapRef) {
        valueMapRef.current = answers
      }
      if (onSubmit) {
        await onSubmit({ values: value, answers, formApi })
      }
    },
  })

  const FormField = form.Field

  const values = useStore(form.store, state => state.values ?? {})
  const answersMap = useMemo(() => new Map(Object.entries(values ?? {})), [values])

  useEffect(() => {
    latestAnswersRef.current = answersMap
    if (valueMapRef) {
      valueMapRef.current = answersMap
    }
    if (onValuesChange) {
      onValuesChange(answersMap)
    }
  }, [answersMap, onValuesChange, valueMapRef])

  const resolvedRenderers = useMemo(() => ({ ...defaultRenderers, ...renderers }), [renderers])

  const handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    void form.handleSubmit()
  }

  const renderField = field => {
    const renderer = resolvedRenderers[field.component]
    if (!renderer) {
      return null
    }

    if (CONTROL_COMPONENTS.has(field.component)) {
      const validators = buildFieldValidators(field)
      return (
        <FormField name={field.id} key={field.id} validators={validators}>
          {fieldApi => renderer(field, { fieldApi, form })}
        </FormField>
      )
    }

    const node = renderer(field, { form })

    if (React.isValidElement(node)) {
      return React.cloneElement(node, { key: field.id })
    }

    return (
      <React.Fragment key={field.id}>
        {node}
      </React.Fragment>
    )
  }

  const { className: containerClassNameProp, ...containerRest } = containerProps
  const { className: formClassNameProp, ...formRest } = formProps

  const containerClassName = combineClassNames(layout.containerClassName, className, containerClassNameProp)
  const formClassName = combineClassNames(layout.formClassName, formClassNameProp)

  return (
    <div {...containerRest} className={containerClassName}>
      <div className={combineClassNames(layout.innerClassName)}>
        <form {...formRest} onSubmit={handleSubmit} className={formClassName}>
          <div className={combineClassNames(layout.gridClassName)}>{fields.map(renderField)}</div>
        </form>
      </div>
    </div>
  )
}

export default FormRender
