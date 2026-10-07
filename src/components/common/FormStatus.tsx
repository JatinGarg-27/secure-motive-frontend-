import type { SubmitStatus } from '@/hooks/useFormSubmission'

interface FormStatusProps {
  status: SubmitStatus
  /** Shown once the backend has accepted the submission. */
  success: string
  /** Shown when sending failed; the form keeps its values so the user can retry. */
  error: string
}

const BASE_CLASSES = 'mt-4 text-center font-code text-xs'

/**
 * Result line under a form's submit button. The design has no form states, so
 * this follows the mono label system: teal for good news, orange for errors.
 */
export default function FormStatus({ status, success, error }: FormStatusProps) {
  if (status === 'success') {
    return (
      <p role="status" className={`${BASE_CLASSES} text-cyber-teal`}>
        {success}
      </p>
    )
  }
  if (status === 'preview') {
    return (
      <p role="status" className={`${BASE_CLASSES} text-cyber-teal`}>
        Form validated. Preview mode — the backend is not connected yet, so nothing was sent.
      </p>
    )
  }
  if (status === 'error') {
    return (
      <p role="alert" className={`${BASE_CLASSES} text-cyber-orange`}>
        {error}
      </p>
    )
  }
  return null
}
