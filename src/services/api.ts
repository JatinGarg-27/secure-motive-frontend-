/**
 * Thin HTTP client for the SecureXmotive backend (separate Node/Express project).
 * All network access goes through apiRequest so base URL, headers and error
 * handling live in one place.
 */

const BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/+$/, '')

/**
 * PROVISIONAL endpoint paths. The backend project was not available when the
 * frontend foundation was created — confirm each path, payload and response
 * against the backend before wiring any UI to it.
 */
export const API_ENDPOINTS = {
  contact: '/api/contact',
  careerApplications: '/api/careers/applications',
  videos: '/api/videos',
} as const

/**
 * Whether forms talk to the backend. Off until the API contract has been
 * verified (set `VITE_ENABLE_API=true`). While off, forms run in preview mode:
 * they validate and show their states, but nothing is sent.
 */
export const API_ENABLED = import.meta.env.VITE_ENABLE_API === 'true'

/** Outcome of a form submission. `delivered` is false in preview mode. */
export interface SubmissionResult {
  delivered: boolean
}

const PREVIEW_DELAY_MS = 600

/** Runs `send` when the API is enabled; otherwise waits briefly and reports "not delivered". */
export async function submitOrPreview(send: () => Promise<void>): Promise<SubmissionResult> {
  if (!API_ENABLED) {
    await new Promise((resolve) => setTimeout(resolve, PREVIEW_DELAY_MS))
    return { delivered: false }
  }
  await send()
  return { delivered: true }
}

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

interface RequestOptions {
  method?: 'GET' | 'POST'
  /** Plain objects are sent as JSON; FormData is sent as multipart. */
  body?: unknown
  signal?: AbortSignal
}

async function readErrorMessage(response: Response): Promise<string> {
  try {
    const data: unknown = await response.json()
    if (typeof data === 'object' && data !== null && 'message' in data) {
      return String(data.message)
    }
  } catch {
    // Body was empty or not JSON — fall through to the status text.
  }
  return response.statusText || `Request failed with status ${response.status}`
}

export async function apiRequest<T>(
  path: string,
  { method = 'GET', body, signal }: RequestOptions = {},
): Promise<T> {
  const isFormData = body instanceof FormData
  const init: RequestInit = { method, signal }

  if (body !== undefined) {
    init.body = isFormData ? body : JSON.stringify(body)
    // The browser sets the multipart boundary itself for FormData.
    if (!isFormData) init.headers = { 'Content-Type': 'application/json' }
  }

  const response = await fetch(`${BASE_URL}${path}`, init)

  if (!response.ok) {
    throw new ApiError(await readErrorMessage(response), response.status)
  }
  if (response.status === 204) return undefined as T
  return (await response.json()) as T
}
