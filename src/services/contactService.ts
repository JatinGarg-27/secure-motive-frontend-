import type { ContactFormValues } from '@/types/contact'
import { API_ENDPOINTS, apiRequest, submitOrPreview, type SubmissionResult } from './api'

/** Sends a Contact form submission. Payload shape is provisional — see api.ts. */
export function submitContactForm(values: ContactFormValues): Promise<SubmissionResult> {
  return submitOrPreview(() =>
    apiRequest<void>(API_ENDPOINTS.contact, { method: 'POST', body: values }),
  )
}
