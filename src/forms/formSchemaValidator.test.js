import { describe, expect, it } from 'vitest'
import contactFormSchema from './contactForm.schema.json'
import { validateField, validateFormSchema } from './formSchemaValidator.js'

describe('validateFormSchema', () => {
  it('accepts the contact form schema', () => {
    const result = validateFormSchema(contactFormSchema)
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
    expect(result.fieldErrors).toHaveLength(0)
  })

  it('flags duplicate field ids', () => {
    const schema = {
      ...contactFormSchema,
      fields: [
        { ...contactFormSchema.fields[0] },
        { ...contactFormSchema.fields[0] },
      ],
    }

    const result = validateFormSchema(schema)
    expect(result.valid).toBe(false)
    expect(result.fieldErrors[0].errors.some(error => error.includes('Duplicate field id'))).toBe(true)
  })
})

describe('validateField', () => {
  it('detects unsupported components', () => {
    const { valid, errors } = validateField({ id: 'foo', component: 'unknown' }, 0)
    expect(valid).toBe(false)
    expect(errors[0]).toMatch(/unsupported component/i)
  })

  it('validates input pattern expressions', () => {
    const { valid, errors } = validateField({
      id: 'email',
      component: 'input',
      type: 'email',
      validation: {
        pattern: { value: '[' },
      },
    }, 0)

    expect(valid).toBe(false)
    expect(errors.some(error => error.includes('pattern'))).toBe(true)
  })
})

