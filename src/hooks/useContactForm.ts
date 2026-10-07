import { submitContactForm } from '@/services/contactService'
import type { ContactFormValues } from '@/types/contact'
import { contactFormRules } from '@/utils/validation'
import { useFormSubmission } from './useFormSubmission'

const INITIAL_VALUES: ContactFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  service: '',
  message: '',
}

/** State for the Contact page form (UI built in Phase 5). */
export function useContactForm() {
  return useFormSubmission({
    initialValues: INITIAL_VALUES,
    rules: contactFormRules,
    submit: submitContactForm,
  })
}
