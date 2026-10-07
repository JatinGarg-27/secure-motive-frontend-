import { useState } from 'react'
import { submitCareerApplication } from '@/services/careerService'
import type { CareerApplicationValues } from '@/types/career'
import { careerFormRules, validateResume } from '@/utils/validation'
import { useFormSubmission } from './useFormSubmission'

const INITIAL_VALUES: CareerApplicationValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  linkedin: '',
  role: '',
  experience: '',
  coverNote: '',
}

/** State for the Careers "Submit resume" form: the text fields plus the resume file. */
export function useCareerForm() {
  const [resume, setResumeFile] = useState<File | null>(null)
  const [resumeError, setResumeError] = useState<string>()

  /** Stores the chosen file and reports a wrong type or size straight away. */
  const setResume = (file: File | null) => {
    setResumeFile(file)
    setResumeError(file ? validateResume(file) : undefined)
  }

  const form = useFormSubmission({
    initialValues: INITIAL_VALUES,
    rules: careerFormRules,
    validateExtra: () => {
      const error = validateResume(resume)
      setResumeError(error)
      return !error
    },
    // validateExtra has already rejected a missing file by the time this runs.
    submit: (values) => submitCareerApplication({ ...values, resume: resume as File }),
    onDelivered: () => setResumeFile(null),
  })

  return { ...form, resume, resumeError, setResume }
}

export type CareerFormState = ReturnType<typeof useCareerForm>
