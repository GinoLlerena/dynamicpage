const ALLOWED_COMPONENTS = new Set(['heading', 'input', 'textarea', 'button'])
const ALLOWED_INPUT_TYPES = new Set(['text', 'email', 'number', 'password', 'tel', 'url'])
const ALLOWED_BUTTON_TYPES = new Set(['button', 'submit', 'reset'])

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function validateLayout(layout = {}) {
  const errors = []
  if (typeof layout !== 'object' || layout === null) {
    errors.push('Layout must be an object.')
    return { valid: false, errors }
  }

  const requiredKeys = ['containerClassName', 'innerClassName', 'formClassName', 'gridClassName']
  requiredKeys.forEach(key => {
    if (layout[key] !== undefined && typeof layout[key] !== 'string') {
      errors.push(`Layout property "${key}" must be a string.`)
    }
  })

  return { valid: errors.length === 0, errors }
}

function validatePattern(patternConfig, fieldId) {
  if (!patternConfig || typeof patternConfig !== 'object') {
    return []
  }

  const errors = []
  if (!isNonEmptyString(patternConfig.value)) {
    errors.push(`Field "${fieldId}" has an invalid pattern: "value" must be a non-empty string.`)
    return errors
  }

  try {
    // eslint-disable-next-line no-new
    new RegExp(patternConfig.value)
  } catch (error) {
    errors.push(`Field "${fieldId}" pattern is not a valid regular expression.`)
  }

  if (patternConfig.message !== undefined && !isNonEmptyString(patternConfig.message)) {
    errors.push(`Field "${fieldId}" pattern message must be a non-empty string when provided.`)
  }

  return errors
}

function validateField(field, index) {
  const errors = []

  if (typeof field !== 'object' || field === null) {
    return {
      valid: false,
      errors: [`Field at index ${index} must be an object.`],
    }
  }

  const fieldId = isNonEmptyString(field.id) ? field.id.trim() : undefined
  if (!fieldId) {
    errors.push('Field "id" is required and must be a non-empty string.')
  }

  if (!ALLOWED_COMPONENTS.has(field.component)) {
    errors.push(`Field "${fieldId ?? index}" has unsupported component "${field.component}".`)
  }

  switch (field.component) {
    case 'heading': {
      if (!isNonEmptyString(field.text)) {
        errors.push(`Heading field "${fieldId ?? index}" must include "text".`)
      }
      const props = field.props
      if (props !== undefined) {
        if (typeof props !== 'object' || props === null) {
          errors.push(`Heading field "${fieldId ?? index}" props must be an object.`)
        } else {
          if (props.as !== undefined && !isNonEmptyString(props.as)) {
            errors.push(`Heading field "${fieldId ?? index}" prop "as" must be a non-empty string when provided.`)
          }
          if (props.className !== undefined && typeof props.className !== 'string') {
            errors.push(`Heading field "${fieldId ?? index}" prop "className" must be a string when provided.`)
          }
        }
      }
      break
    }
    case 'input': {
      if (!isNonEmptyString(field.type)) {
        errors.push(`Input field "${fieldId ?? index}" must include a "type".`)
      } else if (!ALLOWED_INPUT_TYPES.has(field.type)) {
        errors.push(`Input field "${fieldId ?? index}" type "${field.type}" is not supported.`)
      }
      if (field.validation) {
        if (typeof field.validation !== 'object' || field.validation === null) {
          errors.push(`Input field "${fieldId ?? index}" validation must be an object when provided.`)
        } else {
          if (field.validation.required) {
            const required = field.validation.required
            if (typeof required !== 'object' || required === null || !isNonEmptyString(required.message)) {
              errors.push(`Input field "${fieldId ?? index}" required validation must include a non-empty "message".`)
            }
          }
          errors.push(...validatePattern(field.validation.pattern, fieldId ?? index))
        }
      }
      break
    }
    case 'textarea': {
      if (field.validation) {
        if (typeof field.validation !== 'object' || field.validation === null) {
          errors.push(`Textarea field "${fieldId ?? index}" validation must be an object when provided.`)
        } else {
          if (field.validation.required) {
            const required = field.validation.required
            if (typeof required !== 'object' || required === null || !isNonEmptyString(required.message)) {
              errors.push(`Textarea field "${fieldId ?? index}" required validation must include a non-empty "message".`)
            }
          }
        }
      }
      break
    }
    case 'button': {
      if (!isNonEmptyString(field.text)) {
        errors.push(`Button field "${fieldId ?? index}" must include "text".`)
      }
      if (field.type !== undefined) {
        if (!isNonEmptyString(field.type) || !ALLOWED_BUTTON_TYPES.has(field.type)) {
          errors.push(`Button field "${fieldId ?? index}" has unsupported type "${field.type}".`)
        }
      }
      break
    }
    default:
      break
  }

  if (field.wrapperClassName !== undefined && typeof field.wrapperClassName !== 'string') {
    errors.push(`Field "${fieldId ?? index}" wrapperClassName must be a string when provided.`)
  }

  if (field.spacingClassName !== undefined && typeof field.spacingClassName !== 'string') {
    errors.push(`Field "${fieldId ?? index}" spacingClassName must be a string when provided.`)
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

function validateFormSchema(schema) {
  const errors = []
  const fieldErrors = []

  if (typeof schema !== 'object' || schema === null) {
    return {
      valid: false,
      errors: ['Schema must be an object.'],
      fieldErrors,
    }
  }

  if (!isNonEmptyString(schema.id)) {
    errors.push('Schema "id" is required and must be a non-empty string.')
  }

  if (!isNonEmptyString(schema.title)) {
    errors.push('Schema "title" is required and must be a non-empty string.')
  }

  if (schema.description !== undefined && typeof schema.description !== 'string') {
    errors.push('Schema "description" must be a string when provided.')
  }

  const layoutResult = validateLayout(schema.layout)
  if (!layoutResult.valid) {
    errors.push(...layoutResult.errors)
  }

  if (!Array.isArray(schema.fields)) {
    errors.push('Schema "fields" must be an array.')
    return {
      valid: false,
      errors,
      fieldErrors,
    }
  }

  const seenFieldIds = new Set()

  schema.fields.forEach((field, index) => {
    const { valid, errors: fieldValidationErrors } = validateField(field, index)
    const fieldId = typeof field === 'object' && field !== null && isNonEmptyString(field.id)
      ? field.id.trim()
      : `index-${index}`

    if (fieldId && seenFieldIds.has(fieldId)) {
      fieldValidationErrors.push(`Duplicate field id "${fieldId}" detected.`)
    } else if (fieldId) {
      seenFieldIds.add(fieldId)
    }

    if (!valid || fieldValidationErrors.length > 0) {
      fieldErrors.push({ fieldId, errors: fieldValidationErrors })
    }
  })

  const isValid = errors.length === 0 && fieldErrors.every(item => item.errors.length === 0)

  return {
    valid: isValid,
    errors,
    fieldErrors,
  }
}

export {
  ALLOWED_COMPONENTS,
  ALLOWED_INPUT_TYPES,
  ALLOWED_BUTTON_TYPES,
  validateField,
  validateLayout,
  validateFormSchema,
}

