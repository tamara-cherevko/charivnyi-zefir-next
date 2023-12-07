import { ReactNode } from 'react'

export default function SecondaryPageLoading({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-100 p-10 mb-8">
      <div className="my-12"></div>
      <div className="my-8">{children}</div>
    </div>
  )
}
