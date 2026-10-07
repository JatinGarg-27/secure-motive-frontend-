import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { SelectField, TextAreaField, TextField } from '@/components/common/FormFields'
import FormStatus from '@/components/common/FormStatus'
import { roleOptions } from '@/data/careers'
import type { CareerFormState } from '@/hooks/useCareerForm'
import ResumeUpload from './ResumeUpload'

/**
 * Application form card. Its state is owned by the page (`useCareerForm`) so
 * that "Apply now" on a job can preselect the role.
 */
export default function CareerForm({ form }: { form: CareerFormState }) {
  const { values, errors, status, setField, handleSubmit, resume, resumeError, setResume } = form
  const isSubmitting = status === 'submitting'

  return (
    <Card interactive className="p-6 sm:p-8">
      <form noValidate onSubmit={handleSubmit} aria-label="Job application">
        <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
          <TextField
            label="First name"
            name="firstName"
            value={values.firstName}
            onChange={(value) => setField('firstName', value)}
            error={errors.firstName}
            placeholder="Aditya"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            name="lastName"
            value={values.lastName}
            onChange={(value) => setField('lastName', value)}
            error={errors.lastName}
            placeholder="Sharma"
            autoComplete="family-name"
            required
          />
          <TextField
            label="Email address"
            name="email"
            type="email"
            value={values.email}
            onChange={(value) => setField('email', value)}
            error={errors.email}
            placeholder="aditya@email.com"
            autoComplete="email"
            className="sm:col-span-2"
            required
          />
          <TextField
            label="Phone number"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(value) => setField('phone', value)}
            error={errors.phone}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            className="sm:col-span-2"
            required
          />
          <TextField
            label="LinkedIn profile"
            name="linkedin"
            value={values.linkedin}
            onChange={(value) => setField('linkedin', value)}
            error={errors.linkedin}
            placeholder="linkedin.com/in/yourname"
            autoComplete="url"
            className="sm:col-span-2"
          />
          <SelectField
            label="Role of interest"
            name="role"
            value={values.role}
            onChange={(value) => setField('role', value)}
            error={errors.role}
            placeholder="Select a role"
            options={roleOptions}
            className="sm:col-span-2"
          />
          <TextField
            label="Years of experience"
            name="experience"
            inputMode="decimal"
            value={values.experience}
            onChange={(value) => setField('experience', value)}
            error={errors.experience}
            placeholder="5"
            className="sm:col-span-2"
            required
          />
          <TextAreaField
            label="Cover note / message"
            name="coverNote"
            value={values.coverNote}
            onChange={(value) => setField('coverNote', value)}
            error={errors.coverNote}
            placeholder="Tell us about your background, what motivates you, and what you are looking for..."
            size="md"
            className="sm:col-span-2"
          />
          <ResumeUpload
            file={resume}
            onChange={setResume}
            error={resumeError}
            disabled={isSubmitting}
            className="sm:col-span-2"
          />
        </div>

        <div className="mt-5">
          <Button type="submit" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Submit application'}
          </Button>
        </div>
        <FormStatus
          status={status}
          success="Application received. We will reach out when a suitable role opens."
          error="Your application could not be sent. Please try again."
        />
      </form>
    </Card>
  )
}
