import { useState } from 'react'
import type { SubmissionResult } from '@/services/api'
import { validateForm, type FormErrors, type FormRules } from '@/utils/validation'

/**
 * `success` — the backend accepted the submission.
 * `preview` — the form is valid but the API is switched off, so nothing was sent.
 */
export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'preview' | 'error'

interface UseFormSubmissionOptions<T> {
  initialValues: T
  rules: FormRules<T>
  submit: (values: T) => Promise<SubmissionResult>
  /** Checks outside the text fields (e.g. a file). Returns true when valid. */
  validateExtra?: () => boolean
  /** Runs after the backend accepts a submission, to clear state held elsewhere. */
  onDelivered?: () => void
}

/** Shared state machine for the site's forms: values, validation, submission. */
export function useFormSubmission<T extends { [K in keyof T]: string }>({
  initialValues,
  rules,
  submit,
  validateExtra,
  onDelivered,
}: UseFormSubmissionOptions<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<FormErrors<T>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const setField = (field: keyof T, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
  }

  const handleSubmit = async (event: { preventDefault(): void }) => {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validateForm(values, rules)
    setErrors(nextErrors)
    // Run both checks so every problem is shown at once.
    const extraIsValid = validateExtra ? validateExtra() : true
    if (Object.keys(nextErrors).length > 0 || !extraIsValid) {
      setStatus('idle')
      return
    }

    setStatus('submitting')
    try {
      const { delivered } = await submit(values)
      if (delivered) {
        setValues(initialValues)
        onDelivered?.()
      }
      setStatus(delivered ? 'success' : 'preview')
    } catch {
      setStatus('error')
    }
  }

  return { values, errors, status, setField, handleSubmit }
}
