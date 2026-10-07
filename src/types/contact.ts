/** Fields of the Contact form, in design order. */
export interface ContactFormValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  service: string
  message: string
}

export interface Office {
  city: string
  country: string
  address: string
  email: string
  phone: string
}

/** A line in the "Response time" card. */
export interface ResponseTime {
  label: string
  /** Bullet colour. */
  tone: 'orange' | 'teal'
}
