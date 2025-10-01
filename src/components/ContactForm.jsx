import React, { useCallback, useRef } from 'react'
import FormRender from './dynamic/FormRender'

function ContactForm(props) {
  const { className, id = 'contact', ...containerProps } = props
  const answersRef = useRef(new Map())

  const handleValuesChange = useCallback(answers => {
    answersRef.current = answers
  }, [])

  const handleSubmit = useCallback(async ({ values }) => {
    console.info('Contact form submitted', values)
  }, [])

  return (
    <FormRender
      onSubmit={handleSubmit}
      onValuesChange={handleValuesChange}
      valueMapRef={answersRef}
      className={className}
      containerProps={{ id, ...containerProps }}
    />
  )
}

export default ContactForm
