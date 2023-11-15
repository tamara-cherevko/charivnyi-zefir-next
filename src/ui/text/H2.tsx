import { ReactNode } from 'react'

export default function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-center text-3xl mb-4 font-amatic">{children}</h2>
}
