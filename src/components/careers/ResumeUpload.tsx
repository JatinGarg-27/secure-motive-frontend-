import { useId, useRef, useState } from 'react'
import type { DragEvent } from 'react'
import { FieldShell } from '@/components/common/FormFields'
import { cn } from '@/utils/helpers'
import { RESUME_EXTENSIONS } from '@/utils/validation'

interface ResumeUploadProps {
  file: File | null
  onChange: (file: File | null) => void
  error?: string
  disabled?: boolean
  className?: string
}

const ACTION_CLASSES =
  'cursor-pointer font-code text-xs tracking-widest uppercase transition-colors disabled:pointer-events-none'

function formatSize(bytes: number): string {
  return bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/**
 * Resume picker in the style of the form's other fields. The design has a
 * plain "Resume / CV link" input; the client asked for a file upload, so this
 * replaces it: choose or drop a file, see its name, replace or remove it.
 * The file is sent with the rest of the form, not uploaded on its own.
 */
export default function ResumeUpload({ file, onChange, error, disabled, className }: ResumeUploadProps) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const remove = () => {
    onChange(null)
    // Clear the native input too, so the same file can be picked again.
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    const dropped = event.dataTransfer.files[0]
    if (dropped && !disabled) onChange(dropped)
  }

  return (
    <FieldShell id={id} label="Resume / CV" required error={error} className={className}>
      <div
        onDragOver={(event) => {
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          'flex min-h-11.75 flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border border-dashed bg-cyber-field px-4 py-2.5 transition-colors focus-within:border-cyber-teal/60 focus-within:ring-2 focus-within:ring-cyber-teal/20',
          error ? 'border-cyber-orange' : isDragging ? 'border-cyber-teal/60' : 'border-cyber-teal/20',
        )}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={RESUME_EXTENSIONS.join(',')}
          disabled={disabled}
          required
          onChange={(event) => onChange(event.target.files?.[0] ?? null)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="sr-only"
        />
        {file ? (
          <p className="flex min-w-0 flex-1 items-baseline gap-3 text-sm text-cyber-value">
            <span className="truncate">{file.name}</span>
            <span className="shrink-0 font-code text-2xs text-cyber-muted">
              {formatSize(file.size)}
            </span>
          </p>
        ) : (
          <p className="min-w-0 flex-1 text-sm text-cyber-placeholder/50">
            PDF, DOC or DOCX, up to 5 MB
          </p>
        )}
        <label htmlFor={id} className={cn(ACTION_CLASSES, 'text-cyber-teal hover:text-white')}>
          {file ? 'Replace' : 'Choose file'}
        </label>
        {file && (
          <button
            type="button"
            onClick={remove}
            disabled={disabled}
            className={cn(ACTION_CLASSES, 'text-cyber-muted hover:text-cyber-orange')}
          >
            Remove
          </button>
        )}
      </div>
    </FieldShell>
  )
}
