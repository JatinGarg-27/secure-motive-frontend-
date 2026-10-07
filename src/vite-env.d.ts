/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the SecureXmotive backend, without a trailing slash. */
  readonly VITE_API_BASE_URL?: string
  /** "true" lets forms call the backend; anything else keeps them in preview mode. */
  readonly VITE_ENABLE_API?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
