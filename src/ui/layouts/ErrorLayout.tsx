'use client'
import { useEffect } from 'react'
import Button from '@/ui/components/button/Button'

export default function ErrorLayout({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h2>Упс.... щось пішло не так!</h2>
      <p>{error?.message || ''}</p>
      <Button onClick={() => reset()}>Повторити спробу</Button>
    </div>
  )
}
