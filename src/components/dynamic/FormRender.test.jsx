import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import FormRender from './FormRender'

function createValueRef() {
  return { current: new Map() }
}

describe('FormRender', () => {
  test('updates value map and notifies on value changes', async () => {
    const handleValuesChange = vi.fn()
    const valueMapRef = createValueRef()
    const user = userEvent.setup()

    render(
      <FormRender
        onValuesChange={handleValuesChange}
        valueMapRef={valueMapRef}
      />,
    )

    const nameInput = screen.getByPlaceholderText('Your Name')
    await user.type(nameInput, 'Jane')

    await waitFor(() => {
      expect(valueMapRef.current.get('name')).toBe('Jane')
    })

    expect(handleValuesChange).toHaveBeenCalled()
  })

  test('shows validation errors defined in config', async () => {
    const user = userEvent.setup()
    render(<FormRender />)

    const emailInput = screen.getByPlaceholderText('YourEmail@email.com')

    await user.type(emailInput, 'invalid-email')
    await user.tab()

    await waitFor(() => {
      expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument()
    })
  })

  test('accepts whitespace-padded valid email addresses', async () => {
    const user = userEvent.setup()
    render(<FormRender />)

    const emailInput = screen.getByPlaceholderText('YourEmail@email.com')

    await user.type(emailInput, ' gino.llerena@gmail.com ')
    await user.tab()

    await waitFor(() => {
      expect(emailInput).toHaveValue('gino.llerena@gmail.com')
      expect(screen.queryByText('Enter a valid email address.')).not.toBeInTheDocument()
    })
  })
})
