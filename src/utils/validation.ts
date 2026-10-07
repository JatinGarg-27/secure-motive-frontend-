import type { CareerApplicationValues } from '@/types/career'
import type { ContactFormValues } from '@/types/contact'

/** Returns an error message, or undefined when the value is valid. */
export type Validator = (value: string) => string | undefined

export type FormRules<T> = Partial<Record<keyof T, Validator[]>>
export type FormErrors<T> = Partial<Record<keyof T, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^\+?[\d\s().-]{7,20}$/

export const required =
  (label: string): Validator =>
  (value) =>
    value.trim() ? undefined : `${label} is required.`

export const email: Validator = (value) =>
  !value.trim() || EMAIL_PATTERN.test(value.trim()) ? undefined : 'Enter a valid email address.'

export const phone: Validator = (value) =>
  !value.trim() || PHONE_PATTERN.test(value.trim()) ? undefined : 'Enter a valid phone number.'

export const url: Validator = (value) => {
  const trimmed = value.trim()
  if (!trimmed) return undefined
  // Accept links typed without a scheme, e.g. "linkedin.com/in/yourname".
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  try {
    new URL(candidate)
  } catch {
    return 'Enter a valid link.'
  }
  return candidate.includes('.') ? undefined : 'Enter a valid link.'
}

/** A non-negative number no larger than `max`; empty passes (pair with `required`). */
export const numberUpTo =
  (max: number): Validator =>
  (value) => {
    const trimmed = value.trim()
    if (!trimmed) return undefined
    const amount = Number(trimmed)
    return Number.isFinite(amount) && amount >= 0 && amount <= max
      ? undefined
      : `Enter a number between 0 and ${max}.`
  }

/*
 * Resume upload limits. The source does not specify them, so these are
 * conservative assumptions — change them here once the backend's limits are
 * known.
 */
export const RESUME_EXTENSIONS = ['.pdf', '.doc', '.docx']
export const RESUME_MAX_BYTES = 5 * 1024 * 1024

/** Returns an error message for a missing, mistyped or oversized resume. */
export function validateResume(file: File | null): string | undefined {
  if (!file) return 'Resume is required.'
  const name = file.name.toLowerCase()
  if (!RESUME_EXTENSIONS.some((extension) => name.endsWith(extension))) {
    return 'Upload a PDF, DOC or DOCX file.'
  }
  if (file.size > RESUME_MAX_BYTES) return 'The file is larger than 5 MB.'
  return undefined
}

/** Runs every rule and returns the first error per field. */
export function validateForm<T extends { [K in keyof T]: string }>(
  values: T,
  rules: FormRules<T>,
): FormErrors<T> {
  const errors: FormErrors<T> = {}
  for (const field of Object.keys(rules) as Array<keyof T>) {
    for (const validate of rules[field] ?? []) {
      const message = validate(values[field])
      if (message) {
        errors[field] = message
        break
      }
    }
  }
  return errors
}

/* Contact: required fields follow the asterisks in the design.
   Career: required fields follow the client's specification (name, email,
   phone, years of experience, resume); LinkedIn stays optional.
   Message copy is not part of the design and can be reworded freely. */

export const contactFormRules: FormRules<ContactFormValues> = {
  firstName: [required('First name')],
  lastName: [required('Last name')],
  email: [required('Business email'), email],
  phone: [phone],
  company: [required('Company')],
  message: [required('Message')],
}

export const careerFormRules: FormRules<CareerApplicationValues> = {
  firstName: [required('First name')],
  lastName: [required('Last name')],
  email: [required('Email address'), email],
  phone: [required('Phone number'), phone],
  linkedin: [url],
  experience: [required('Years of experience'), numberUpTo(60)],
}
