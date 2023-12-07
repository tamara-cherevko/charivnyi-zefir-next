'use client'

import { ErrorLayout } from '@/ui/layouts'

export default function Error(props: { error: Error & { digest?: string }; reset: () => void }) {
  return <ErrorLayout {...props} />
}
