import { SecondaryPageLoading } from '@/ui/layouts'
import { ReactNode } from 'react'

export default function Loading({ children }: { children: ReactNode }) {
  return <SecondaryPageLoading>{children} </SecondaryPageLoading>
}
