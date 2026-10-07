import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { SelectField, TextAreaField, TextField } from '@/components/common/FormFields'
import FormStatus from '@/components/common/FormStatus'
import SectionLabel from '@/components/common/SectionLabel'
import { serviceDomains } from '@/data/services'
import { useContactForm } from '@/hooks/useContactForm'

const SERVICE_OPTIONS = serviceDomains.map((domain) => domain.name)

/** Contact form card. State and validation live in `useContactForm`. */
export default function ContactForm() {
  const { values, errors, status, setField, handleSubmit } = useContactForm()
  const isSubmitting = status === 'submitting'

  return (
    <Card interactive className="p-6 sm:p-8">
      <form noValidate onSubmit={handleSubmit} aria-labelledby="contact-form-title">
        <SectionLabel as="h2" id="contact-form-title">
          Contact form
        </SectionLabel>

        <div className="mt-2 grid gap-x-4 gap-y-5 sm:grid-cols-2">
          <TextField
            label="First name"
            name="firstName"
            value={values.firstName}
            onChange={(value) => setField('firstName', value)}
            error={errors.firstName}
            placeholder="Rahul"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            name="lastName"
            value={values.lastName}
            onChange={(value) => setField('lastName', value)}
            error={errors.lastName}
            placeholder="Gupta"
            autoComplete="family-name"
            required
          />
          <TextField
            label="Business email"
            name="email"
            type="email"
            value={values.email}
            onChange={(value) => setField('email', value)}
            error={errors.email}
            placeholder="r.gupta@oem.com"
            autoComplete="email"
            required
          />
          <TextField
            label="Phone number"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(value) => setField('phone', value)}
            error={errors.phone}
            placeholder="+49 160 1234 5678"
            autoComplete="tel"
          />
          <TextField
            label="Company"
            name="company"
            value={values.company}
            onChange={(value) => setField('company', value)}
            error={errors.company}
            placeholder="Automotive OEM GmbH"
            autoComplete="organization"
            required
          />
          <TextField
            label="Job title"
            name="jobTitle"
            value={values.jobTitle}
            onChange={(value) => setField('jobTitle', value)}
            error={errors.jobTitle}
            placeholder="VP Cybersecurity"
            autoComplete="organization-title"
          />
          <SelectField
            label="Service of interest"
            name="service"
            value={values.service}
            onChange={(value) => setField('service', value)}
            error={errors.service}
            placeholder="Select a service"
            options={SERVICE_OPTIONS}
            className="sm:col-span-2"
          />
          <TextAreaField
            label="Message"
            name="message"
            value={values.message}
            onChange={(value) => setField('message', value)}
            error={errors.message}
            placeholder="Describe your project, regulatory timeline, and specific challenges you want to address..."
            className="sm:col-span-2"
            required
          />
        </div>

        <div className="mt-5">
          <Button type="submit" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send message'}
          </Button>
        </div>
        <FormStatus
          status={status}
          success="Message sent. We will respond within one business day."
          error="Your message could not be sent. Please try again."
        />

        <p className="mt-5 text-center font-code text-xs text-cyber-muted/40">
          All communications are handled under strict confidentiality.
        </p>
      </form>
    </Card>
  )
}
