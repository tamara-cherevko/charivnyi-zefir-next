import { ReactNode } from 'react'
import classNames from 'classnames'

interface H4Props {
  children: ReactNode
  className?: string
}

export default function H4({ children, className }: H4Props) {
  const h4Class = classNames('text-xl mb-4 font-din uppercase', className)

  return <h4 className={h4Class}>{children}</h4>
}
